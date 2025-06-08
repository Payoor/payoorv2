<template>
    <div class="chat-header">
        <div class="chat-header__left">
            <div class="chat-header__name" v-if="name" @click="goBack">
                <span class="svg">
                    <svg>
                        <use :xlink:href="'/svg/symbol-defs.svg#icon-arrow_back'"></use>
                    </svg>
                </span>
                <span class="label">{{ name }}</span>
            </div>

            <figure class="chat-header__left--logo" v-if="logovisible" :class="{ green }">
                <img src="/imgs/logo.png" />
            </figure>
        </div>

        <div class="chat-header__right">
            <div class="chat-header__right--cart">
                <CartButton :showicon="true" />
            </div>

            <div class="chat-header__burger" :class="{ unauth: !jwtToken, green }" @click.stop="toggleSideMenu">
                <span></span><span></span><span></span>
            </div>
        </div>

        <div class="chat-header__menu" v-if="menuopen" :class="{ auth: jwtToken }" @click.stop="toggleSideMenu">
            <div class="chat-header__menubody slide-in-left">
                <div class="chat-header__menuitems">
                    <figure class="chat-header__left--logo bottom-1rem">
                        <img v-lazy="'/imgs/logo.png'" />
                    </figure>

                    <div class="chat-header__menuitem">
                        <span class="svg"></span>
                        <span class="label" @click="$router.push('/aboutus')">About us</span>
                    </div>

                    <div class="chat-header__menuitem" v-if="!jwtToken">
                        <span class="svg"></span>
                        <span class="label" @click="$router.push('/authp')">Sign In/Sign Up</span>
                    </div>

                    <div class="chat-header__menuitem" v-if="jwtToken" @click="goToUserOrders">
                        <span class="svg"></span>
                        <span class="label">Orders</span>
                    </div>
                </div>

                <div class="chat-header__menuitems">
                    <div class="chat-header__menuitem">
                        <span class="svg"></span>
                    </div>

                    <div class="chat-header__menuitem" v-if="jwtToken">
                        <span class="svg"></span>
                        <span class="label" @click="signOut">Signout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { serverurl } from '@/api';
import jwt_mixin from '@/mixins/jwt_mixin';

export default {
    mixins: [jwt_mixin],
    props: ['logovisible', 'name', 'backRoute', 'green'],
    emits: ['update:authValue'],
    data() {
        return { menuopen: false };
    },
    computed: {
        ...mapState("user", {
            currentUser: (state) => state.currentUser,
            isLoading: (state) => state.loading,
            jwtToken: (state) => state.jwtToken
        }),
    },
    async mounted() {
        const token = await this.getValidToken();

        if (token) {
            this.getValidUser(token);
        } else {
            this.redirectHome();
        }

        //this.$store.dispatch('cart/resetCart');

        this.$store.dispatch('cart/initializeCart');
        this.menuopen = window.innerWidth > 900 && this.jwtToken;
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        redirectHome() {
            if (!this.excludedPaths.includes(this.$route.path)) {
                this.$emit('update:authValue', null);
                this.$router.push({ path: '/', query: { ...this.$route.query } });
            }
        },
        goToUserOrders() {
            this.$router.push({ path: '/orders', query: { ...this.$route.query } });
        },
        async getValidUser(token) {
            try {
                const response = await fetch(`${serverurl}/shopper/auth/validuser?jwttoken=${token}`);

                if (response.status !== 200) {
                    this.$store.dispatch('user/removeJwtToken');

                    return this.redirectHome()
                };

                const data = await response.json();
                const { user } = data;

                console.log(user, 'curent user here')
                this.$store.dispatch('user/setJwtToken', token);
                this.$store.dispatch('user/addCurrentUser', user);
            } catch (error) {
                console.log(error);
            }
        },
        toggleSideMenu() {
            this.menuopen = !this.menuopen;
        },
        goBack() {
            this.$router.push({ path: this.backRoute, query: { ...this.$route.query } });
        },
        handleResize() {
            this.menuopen = window.innerWidth > 900;
        },
        async signOut() {
            try {
                this.$store.dispatch('user/setLoading', true);

                const token = await this.getValidToken();

                if (!token) {
                    this.$emit('update:authValue', null);
                    // Remove specific query params
                    const { unwantedParam1, unwantedParam2, ...cleanQuery } = this.$route.query;
                    this.$router.push({ path: '/', query: cleanQuery });
                    return;
                }

                const response = await fetch(`${serverurl}/shopper/auth/signout`, {
                    method: 'POST',
                    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
                });

                if (!response.ok) throw new Error('Failed to sign out');

                await response.json();
                this.$store.dispatch('user/removeJwtToken');
                this.$store.dispatch('user/removeCurrentUser');
                this.$emit('update:authValue', null);

                const { email, phoneNumber, name, ...cleanQuery } = this.$route.query;
                this.$router.push({ path: '/', query: cleanQuery });

                this.$store.dispatch('user/setLoading', false);
            } catch (error) {
                console.error('Sign out failed:', error.message);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;

    @include respond(phone) {
        padding: 2rem;
        padding-top: 2rem;
    }

    &__name {

        display: flex;
        align-items: center;

        & span {

            &.svg {
                display: flex;
                align-items: center;
                margin-right: .5rem;

                & svg {
                    height: 2rem;
                    width: 2rem;
                    fill: $primary-color;
                    color: $primary-color;
                }
            }

            &.label {
                display: flex;
                align-items: center;

                font-size: 2rem;
                color: $primary-color;
                font-weight: 600;

            }
        }
    }

    &__right {

        &--cart {
            @include respond(tab-port) {
                display: none;
            }
        }
    }

    &__left {

        &--logo {
            height: 3rem;

            &.bottom-1rem {
                margin-bottom: 5rem;
            }

            & img {
                height: 100%;
                width: auto;
                object-fit: cover;
            }

            &.green {
                height: 3.5rem;
            }
        }
    }

    &__burger {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 2.5rem;

        & span {
            background: $primary-color;
            border-radius: 1rem;
            margin: .2rem 0;
            display: inline-block;
            width: 3rem;
            height: .35rem;
            flex-shrink: 0;

            &:nth-child(2) {
                width: 2rem;
                height: .35rem;
            }
        }

        &.unauth {

            & span {
                background: $white;
            }
        }

        &.green {

            & span {
                background: rgba($primary-color, 1);
            }
        }
    }

    &__menu {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        overflow-y: scroll;
        background: rgba($black, .6);

        &.auth {
            box-shadow: 20px 0 30px -10px rgba($primary-color, 0.1);
            background: transparent;
            width: auto;

            @include respond(tab-port) {
                width: 100vw;
                overflow: hidden;
                overflow-y: scroll;
                background: rgba($black, .6);

                box-shadow: none;
            }
        }

        @include respond(tab-port) {
            width: 100vw;
            overflow: hidden;
            overflow-y: scroll;
            background: rgba($black, .6);

            box-shadow: none;
        }
    }

    &__menuitem {
        margin-bottom: 3rem;

        font-weight: 500;

        font-size: 1.4rem;

        text-decoration: none;
        cursor: pointer;

        @include respond(tab-port) {
            font-size: 1.8rem;
        }

        & span {
            text-decoration: none;
        }
    }

    &__menubody {
        height: 100vh;
        width: 35rem;
        background: $white;
        padding: 2rem;

        color: $black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding-bottom: 14rem;
    }
}
</style>