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
                    <div v-if="loading" class="chatoptions__loading">
                        <LoadingAnimation />
                    </div>

                    <div v-else>
                        <div v-for="variant in variants" :key="variant._id">
                            <ChatOption :data="{ ...variant, productimg }" />
                        </div>
                    </div>

                    <div class="chatoptions__description">
                        <div class="chatoptions__content--body">
                            <h2 class="description__title">Product Description</h2>
                            <p class="description__text">
                                {{ productDescription || `This product comes in multiple variants. Select the one that
                                best fits your needs. Each
                                variant is carefully crafted to ensure the best quality and customer satisfaction.`}}
                            </p>
                        </div>
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
    props: ['toggleViewOptions', 'mongooseid', 'productname', 'productimg', 'productDescription'],
    mixins: [jwt_mixin],
    data() {
        return {
            variants: [],
            loading: false
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
            this.loading = true;
            const token = await this.getValidToken();

            try {
                const response = await fetch(`${serverurl}/shopper/getoptions?mongooseid=${this.mongooseid}`, {
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
                this.variants = data.variants;
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
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
        font-size: 1.8rem;
        text-transform: capitalize;
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
                    fill: $primary-color;
                    color: $primary-color;
                }
            }
        }
    }

    &__options {
        margin-top: 3rem;
    }

    &__description {
        margin-top: 2rem;
        padding: 1rem 0;
        border-top: 1px solid #eee;

        .description__title {
            font-size: 1.6rem;
            font-weight: bold;
            color: $black;
            margin-bottom: 1rem;
        }

        .description__text {
            font-size: 1.4rem;
            color: #555;
            line-height: 1.6;
        }
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

    &__loading {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5rem 0;
    }

    &__bottom {
        @include fixed-bottom-button-container;
    }
}
</style>