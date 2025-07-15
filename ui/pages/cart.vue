<template>
    <div class="chatcart">
        <div class="chatcart__header">
            <ChatHeader :name="'Your Cart'" :logovisible="false" :jwt="true" :backRoute="backRoute" />
        </div>

        <div class="chatcart__content">
            <div class="chatcart__content--body">
                <div class="chatoptions__options">

                    <div v-for="mongooseid in cartTotalItems" :key="mongooseid">
                        <ChatOption :mongooseid="mongooseid" />
                    </div>
                </div>

                <div class="chatcart__bottom">
                    <div class="chatcart__content--body">
                        <button class="button-primary transparent-button" @click="continueShopping">
                            <span>Continue Shopping</span>
                        </button>

                        <button class="button-primary spacebetween disabled-btn" v-if="cartTotal === 0 || isLoading"
                            disabled>
                            <span>
                                <span v-if="isLoading">Processing...</span>
                                <span v-else>Proceed to Checkout</span>
                            </span>
                            <CartButton :showicon="false" />
                        </button>

                        <button class="button-primary spacebetween" @click="goToCheckout"
                            v-if="cartTotal > 0 && !isLoading" :disabled="isLoading">
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

export default {
    data() {
        return {
            backRoute: '/',
            variants: [],
            isLoading: false // <--- New data property for loading state
        }
    },
    computed: {
        ...mapState("cart", {
            cartTotal: (state) => state.total,
            cartItems: (state) => state.items,
            cartTotalItems: (state) => state.totalItems,
            checkoutData: (state) => state.checkout
        }),
    },
    mounted() {
        //console.log('calling sync cart')
    },
    methods: {
        continueShopping() {
            this.$router.push({
                path: '/',
                query: {
                    ...this.$route.query,
                    prevpage: this.$route.path
                }
            });
        },
        async goToCheckout() {
            this.isLoading = true; // <--- Set loading to true when starting checkout

            const { cartItems, cartTotal } = this;

            this.backRoute = this.$route.path

            //localStorage.setItem('cartItems', JSON.stringify(cartItems));
            //localStorage.setItem('cartTotal', JSON.stringify(cartTotal));

            try {
                await this.$store.dispatch('cart/createCheckout');

                this.$router.push({
                    path: '/checkout',
                    query: {
                        ...this.$route.query,
                        checkout_id: this.checkoutData._id,
                        prevpage: this.$route.path
                    }
                });
            } catch (error) {
                console.error('Error during checkout:', error);
                // Optionally, show a user-friendly error message here
            } finally {
                this.isLoading = false; // <--- Set loading to false regardless of success or failure
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.chatcart {

    &__header {
        @include fixed-header;
    }

    &__content {
        min-height: 100vh;
        position: relative;
        padding-bottom: 20rem;
        background: $white;

        display: flex;
        justify-content: center;

        padding-top: 4rem;

        @include respond(phone) {
            padding: 1rem;
            padding-top: 7rem;


            padding-bottom: 30rem;
        }

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

/* Add some basic loading indicator styles (you'll want to refine these) */
.spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    /* Space between spinner and text */
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.button-primary[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
}
</style>