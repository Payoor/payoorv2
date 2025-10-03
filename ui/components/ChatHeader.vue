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
                        <span class="label" @click="$router.push('/aboutus')" v-if="!jwtToken">About us</span>
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
import { handleFetch } from '@/api';
import jwt_mixin from '@/mixins/jwt_mixin';
import navigation_mixin from '@/mixins/navigation_mixin';

export default {
    mixins: [jwt_mixin, navigation_mixin],
    props: ['logovisible', 'name', 'backRoute', 'green'],
    emits: ['update:authValue'],
    data() {
        return {
            menuopen: false,
            //routeStack: ['/']
        };
    },
    computed: {
        ...mapState("user", {
            currentUser: (state) => state.currentUser,
            isLoading: (state) => state.loading,
            jwtToken: (state) => state.jwtToken,
        }),
    },
    async mounted() {
        const token = await this.getValidToken();

        //console.log(token, 'foolishness')

        if (token) {
            this.getValidUser();
        } else {
            this.redirectHome();
        }

        //this.$store.dispatch('cart/resetCart');

        await this.$store.dispatch('cart/loadCartFromIndexedDB');

        //this.$store.dispatch('cart/clearAllCartItems');

        const routeStack = this.getRouteStack();

        const queryRouteStack = this.$route.query.routeStack;

        const MAX_ROUTE_STACK_SIZE = 4;
        const AUTH_ROUTE_PREFIX = '/auth';

        if (queryRouteStack === undefined || queryRouteStack === null) {
            const initialCandidates = ['/', this.$route.path];
            const filteredInitialCandidates = initialCandidates.filter(
                item => !item.startsWith(AUTH_ROUTE_PREFIX)
            );
            this.routeStack = [...new Set(filteredInitialCandidates)].slice(-MAX_ROUTE_STACK_SIZE);
        } else {
            const existingPaths = queryRouteStack.split(',')
                .map(item => item.trim())
                .filter(item => item !== '' && item !== ',');

            const combinedPaths = [...existingPaths, this.$route.path];

            const filteredCombinedPaths = combinedPaths.filter(
                item => !item.startsWith(AUTH_ROUTE_PREFIX)
            );

            this.routeStack = [...new Set(filteredCombinedPaths)].slice(-MAX_ROUTE_STACK_SIZE);
        }

        this.$router.push({
            path: this.$route.path,
            query: {
                ...this.$route.query,
                routeStack: this.routeStack.join(',')
            }
        });

        this.$router.push({
            path: this.$route.path,
            query: {
                ...this.$route.query,
                routeStack: this.routeStack.join(',')
            }
        });

        this.$router.push({
            path: this.$route.path,
            query: {
                ...this.$route.query,
                routeStack: this.routeStack.join(',')
            }
        });

        this.menuopen = window.innerWidth > 900 && this.jwtToken;

        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        getRouteStack() {
            return this.$route.query.routestack;
        },
        redirectHome() {
            this.$store.dispatch('user/removeJwtToken');
            this.$store.dispatch('user/removeCurrentUser');
            if (!this.excludedPaths.includes(this.$route.path)) {
                this.$emit('update:authValue', null);
                this.$router.push({ path: '/', query: { ...this.$route.query } });
            }
        },
        goToUserOrders() {
            this.$router.push({ path: '/orders', query: { ...this.$route.query, prevpage: this.$route.path } });
        },
        async getValidUser() {
            try {
                const token = localStorage.getItem('jwt')

                const data = await handleFetch({
                    apiroute: 'shopper/auth/validuser',
                    queries: { jwttoken: token },
                    method: 'GET'
                });

                const { user } = data;

               // console.log(data, 'data')

                // console.log(user)

                this.$store.dispatch('user/setJwtToken', token);
                this.$store.dispatch('user/addCurrentUser', user);

            } catch (error) {
                console.error('Error fetching valid user:', error);
                //this.$store.dispatch('user/removeJwtToken');
                return this.redirectHome();
            }
        },
        toggleSideMenu() {
            this.menuopen = !this.menuopen;
        },
        /* goBack() {
             const currentRouteStackQuery = this.$route.query.routeStack;
 
             let routeStackArray = [];
             if (currentRouteStackQuery) {
                 routeStackArray = currentRouteStackQuery.split(',').map(item => item.trim()).filter(item => item !== '');
             }
 
             let targetPath = '/';
 
             if (routeStackArray.length >= 2) {
                 targetPath = routeStackArray[routeStackArray.length - 2];
             } else if (routeStackArray.length === 1) {
                 targetPath = routeStackArray[0];
             }
 
             const newRouteStack = routeStackArray.slice(0, -1);
 
             this.$router.push({
                 path: targetPath,
                 query: {
                     ...this.$route.query,
                     routeStack: newRouteStack.join(',')
                 }
             });
         },*/
        handleResize() {
            this.menuopen = window.innerWidth > 900;
        },
        async signOut() {
            try {
                this.$store.dispatch('user/setLoading', true);

                await handleFetch({
                    apiroute: 'shopper/auth/signout',
                    method: 'POST',
                });

                this.$store.dispatch('user/removeJwtToken');
                this.$store.dispatch('user/removeCurrentUser');
                this.$emit('update:authValue', null);

                const { email, phoneNumber, name, ...cleanQuery } = this.$route.query;
                this.$router.push({ path: '/', query: cleanQuery });

            } catch (error) {
                console.error('Sign out failed:', error.message);
            } finally {
                this.$store.dispatch('user/setLoading', false);
            }
        }
    }
}
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