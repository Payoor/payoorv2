<template>
    <div class="chatcart">
        <div class="chatcart__header">
            <ChatHeader :name="`Checkout Data`" :logovisible="false" :jwt="true" :backRoute="'/'" />
        </div>

        <div class="chatcart__content">
            <div class="chatcart__content--body">
                <div class="chatoptions__options">

                    <div class="checkout-details-card">
                        <h3>Delivery Information</h3>
                        <p><strong>Delivery Address:</strong> {{ deliveryAddress }}</p>
                        <p><strong>Contact Phone:</strong> {{ checkoutPhoneNumber }}</p>
                        <p><strong>Delivery Date:</strong> {{ formattedDeliveryDate }}</p>
                        <p><strong>Email:</strong> {{ userEmail }}</p>
                        <p v-if="deliveryInstruction"><strong>Delivery Instruction:</strong> {{ deliveryInstruction }}
                        </p>
                    </div>

                    <div v-for="({ productId, quantity }) in checkout_items" :key="productId">
                        <ChatOption :mongooseid="productId" :product_quantity="quantity" :admin="true" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

import { serverurl } from '@/api';

export default {
    data() {
        return {
            variants: [],
            checkout_items: [],
            userEmail: "",
            userPhoneNumber: "",
            // Add new data properties for checkout details
            deliveryAddress: "",
            checkoutPhoneNumber: "", // Renamed to avoid confusion with userPhoneNumber
            deliveryDate: null,     // Store the raw object
            deliveryInstruction: ""
        }
    },
    computed: {
        ...mapState("cart", {
            cartTotal: (state) => state.total,
            cartItems: (state) => state.items,
            cartTotalItems: (state) => state.totalItems
        }),
        formattedDeliveryDate() {
            if (this.deliveryDate) {
                const { day, date, month } = this.deliveryDate;
                return `${day}, ${date} ${month}`;
            }
            return 'N/A';
        }
    },
    mounted() {
        this.getCheckOut();
    },
    methods: {
        async getCheckOut() {
            try {
                const checkoutid = this.$route.query.checkout;

                const response = await fetch(`${serverurl}/admin/checkout?checkoutid=${checkoutid}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Origin: window.location.origin,
                        'Access-Control-Request-Method': 'POST',
                        'Access-Control-Request-Headers': 'Content-Type'
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json()
                    console.error('Error response:', errorData)
                    throw new Error(`Request failed with status ${response.status}`)
                }

                const data = await response.json()
                console.log(data);

                const { checkout } = data;

                // Destructure relevant data from checkout
                const {
                    cart_items,
                    user_id,
                    delivery_address,
                    phone_number,       // Checkout's specific phone number
                    delivery_date,
                    delivery_instruction
                } = checkout;

                // Destructure email and phoneNumber from user_id
                const { email, phoneNumber } = user_id;

                // Assign to component data properties
                this.userEmail = email;
                this.userPhoneNumber = phoneNumber;
                this.deliveryAddress = delivery_address;
                this.checkoutPhoneNumber = phone_number; // Assign checkout's phone number
                this.deliveryDate = delivery_date;
                this.deliveryInstruction = delivery_instruction;


                const checkout_items = this.checkout_items;

                for (const productId in cart_items) {
                    if (cart_items.hasOwnProperty(productId)) {
                        const quantity = cart_items[productId];
                        console.log(`Product ID: ${productId}, Quantity: ${quantity}`);

                        const item = {
                            productId,
                            quantity,
                        }
                        checkout_items.push(item)
                    }
                }
                this.checkout_items = checkout_items;
                console.log(this.checkout_items, 'checkout_items')

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

    .checkout-details-card {
        background: #f9f9f9;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 2rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        font-size: 1.4rem;

        h3 {
            margin-top: 0;
            margin-bottom: 1rem;
            color: #333;
        }

        p {
            margin-bottom: 0.5rem;
            color: #555;

            strong {
                color: #222;
            }
        }
    }
}
</style>