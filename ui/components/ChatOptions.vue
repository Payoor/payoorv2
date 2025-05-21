<template>
    <div class="chatoptions">
        <div class="chatoptions__content">
            <div class="chatoptions__content--body">
                <h1 class="chatoptions__header" @click.stop="toggleViewOptions">
                    <span class="svg">
                        <svg>
                            <use v-bind:xlink:href="'/svg/symbol-defs.svg#icon-arrow_back'"></use>
                        </svg>
                    </span>

                    <span>{{ productname }}</span>
                </h1>
            </div>

        </div>
        <div class="chatoptions__content">

            <div class="chatoptions__content--body">
                <div class="chatoptions__options">

                    <div v-for="variant in variants" :key="variant._id">
                        <ChatOption :data="{ ...variant, productimg }" />
                    </div>
                </div>

                <div class="chatoptions__bottom">
                    <div class="chatoptions__content--body">
                        <button class="button-primary transparent-button" @click="toggleViewOptions">
                            <span>Continue Shopping</span>
                        </button>

                        <button class="button-primary spacebetween disabled-btn" v-if="cartTotal === 0">
                            <span>Proceed to Checkout</span>
                            <CartButton :showicon="false" />
                        </button>

                        <button class="button-primary spacebetween" @click="goToCheckout" v-if="cartTotal > 0">
                            <span>Proceed to Checkout</span>
                            <CartButton :showicon="false" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { serverurl } from '@/api';
import jwt_mixin from "@/mixins/jwt_mixin";

export default {
    props: ['toggleViewOptions', 'mongooseid', 'productname', 'productimg'],
    mixins: [jwt_mixin],
    data() {
        return {
            variants: []
        }
    },
    mounted() {
        this.getOptions();
    },
    computed: {
        ...mapState("cart", {
            cartTotal: (state) => state.total,
            cartItems: (state) => state.items,
            cartTotalItems: (state) => state.totalItems
        }),
    },
    methods: {
        async getOptions() {
            const { mongooseid } = this;

            const token = await this.getValidToken();

            try {
                const response = await fetch(`${serverurl}/shopper/getoptions?mongooseid=${mongooseid}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Origin': window.location.origin,
                        'Access-Control-Request-Method': 'POST',
                        'Access-Control-Request-Headers': 'Content-Type'
                    }
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error performing autocomplete:', errorData);
                    return;
                }

                const data = await response.json();

                const { variants } = data;

               // console.log('variants, variants', variants)

                this.variants = variants;

              //  console.log(this.variants, 'updated varaints')
            } catch (error) {
                console.log(error)
            }
        },
        continueShopping() {
            this.$router.push({
                path: '/',
                query: {
                    ...this.$route.query,
                }
            });
        },
        goToCheckout() {
            const { cartItems, cartTotal } = this;

            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            localStorage.setItem('cartTotal', JSON.stringify(cartTotal));

            this.$router.push({
                path: '/checkout',
                query: {
                    ...this.$route.query,
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.chatoptions {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba($white, 1);
    width: 100vw;
    height: 100vh;

    z-index: 10;

    padding: 4rem 2rem;

    overflow: hidden;
    overflow-y: scroll;


    padding-bottom: 19rem;

    &__header {
        font-size: 1.9rem;
        color: $black;
        display: flex;
        align-items: center;
        position: fixed;

        top: 0;
        left: 0;
        padding: 2rem 1rem;
        width: 100%;
        z-index: 3;
        background: $white;

        & span {
            cursor: pointer;

            &.svg {
                display: flex;
                align-items: center;
                margin-right: .5rem;

                & svg {
                    height: 2rem;
                    width: 2rem;
                    fill: $white;
                    color: $white;
                }
            }
        }
    }

    &__options {
        margin-top: 3rem;
    }

    &__content {
        display: flex;
        justify-content: center;

        &--body {
            width: 60rem;

            @include respond(tab-port) {
                width: 100%;
            }

        }
    }

    &__bottom {
        @include fixed-bottom-button-container;
    }
}
</style>