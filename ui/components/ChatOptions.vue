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

                        <button class="button-primary spacebetween disabled-btn" v-if="cartTotal === 0"
                            :disabled="checkoutLoading">
                            <span>Proceed to Checkout</span>
                            <span v-if="checkoutLoading" class="loader ml-1"></span>
                            <CartButton :showicon="false" v-else />
                        </button>

                        <button class="button-primary spacebetween" @click="goToCheckout" v-if="cartTotal > 0"
                            :disabled="checkoutLoading">
                            <span>Proceed to Checkout</span>
                            <span v-if="checkoutLoading" class="loader ml-1"></span>
                            <CartButton :showicon="false" v-else />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { serverurl, handleFetchError } from '@/api';
import jwt_mixin from "@/mixins/jwt_mixin";

export default {
    props: ['toggleViewOptions', 'mongooseid', 'productname', 'productimg', 'productDescription'],
    mixins: [jwt_mixin],
    data() {
        return {
            variants: [],
            backRoute: '/',
            loading: false,
            checkoutLoading: false // New data property to manage checkout button loading state
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

                await handleFetchError(response)

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
        async goToCheckout() {
            this.checkoutLoading = true;

            try {
                await this.$store.dispatch("cart/syncCartToServer");
                this.$router.push({
                    path: '/checkout',
                    query: {
                        ...this.$route.query,
                        prevpage: this.$route.path
                    }
                });
            } catch (error) {
                console.error("Error syncing cart to server:", error);
            } finally {
                this.checkoutLoading = false;
            }
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

        .button-primary {
            display: flex;
            align-items: center;
            justify-content: center; // Center content for a better look with loader
            gap: 0.5rem; // Add some space between text and loader/icon
        }
    }
}

.loader {
    border: .4rem solid #f3f3f3;
    /* Light grey */
    border-top: .4rem solid $white;
    /* White */
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    animation: spin 1s linear infinite;
}

.ml-1 {
    margin-left: 0.5rem; // Basic margin for the loader
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

// Style for disabled button when checkoutLoading is true
.button-primary[disabled] {
    opacity: 0.7; // Visually indicate disabled state
    cursor: not-allowed; // Change cursor
}
</style>