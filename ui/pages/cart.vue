<template>
    <div class="chatcart">
        <div class="chatcart__header">
            <ChatHeader :name="'Your Cart'" :logovisible="false" :jwt="true" :backRoute="'/'" />
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

export default {
    data() {
        return {
            variants: []
        }
    },
    computed: {
        ...mapState("cart", {
            cartTotal: (state) => state.total,
            cartItems: (state) => state.items,
            cartTotalItems: (state) => state.totalItems
        }),
    },
    mounted() {
        //we call sync cart here
        console.log('calling sync cart')
        this.$store.dispatch("cart/syncCartToServer");
    },
    methods: {
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
</style>