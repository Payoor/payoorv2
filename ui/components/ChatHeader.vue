<template>
    <div class="chat-header">
        <div class="chat-header__left">
            <div class="chat-header__name" v-if="name" @click="goBack">
                <span class="svg">
                    <svg>
                        <use v-bind:xlink:href="'/svg/symbol-defs.svg#icon-arrow_back'"></use>
                    </svg>
                </span>
                <span class="label">{{ name }}</span>
            </div>

            <figure class="chat-header__left--logo" v-if="logovisible">
                <img src="/imgs/logo.png" />
            </figure>
        </div>

        <div class="chat-header__right">
            <div class="chat-header__burger" :class="{ 'unauth': !jwt }" @click.stop="toggleSideMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="chat-header__menu" @click.stop="toggleSideMenu" v-if="menuopen">
            <div class="chat-header__menubody slide-in-left ">

                <div class="chat-header__menuitems">
                    <figure class="chat-header__left--logo bottom-1rem">
                        <img src="/imgs/logo.png" />
                    </figure>

                    <div class="chat-header__menuitem">
                        <span class="svg"></span>

                        <span class="label">About us</span>
                    </div>

                    <div class="chat-header__menuitem">
                        <span class="svg"></span>

                        <span class="label">Orders</span>
                    </div>

                    <div class="chat-header__menuitem">
                        <span class="svg"></span>

                        <span class="label">Support</span>
                    </div>

                </div>

                <div class="chat-header__menuitems">
                    <div class="chat-header__menuitem">
                        <span class="svg"></span>

                        <span class="label">nerdyemmanuel@gmail.com</span>
                    </div>

                    <div class="chat-header__menuitem">
                        <span class="svg"></span>

                        <span class="label">Signout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jwt_mixin from "@/mixins/jwt_mixin";

export default {
    mixins: [jwt_mixin],
    props: ['logovisible', 'name', 'backRoute'],
    data() {
        return {
            menuopen: false
        }
    },
    mounted() {
        this.getValidToken();

        this.$store.dispatch("cart/initializeCart");
    },
    methods: {
        toggleSideMenu() {
            this.menuopen = !this.menuopen;
        },
        goBack() {
            this.$router.push({
                path: this.backRoute,
                query: {
                    ...this.$route.query,
                }
            });
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
        padding: 1rem;
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
    }

    &__menuitem {
        margin-bottom: 3rem;
        font-size: 1.8rem;
        font-weight: 500;

        text-decoration: none;

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