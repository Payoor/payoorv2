<template>
    <div class="orderdetails" v-if="order && cart.length">
        <div class="orderdetails__content">
            <div class="orderdetails__content--body">
                <div class="orderdetails__summary">
                    <h2 class="orderdetails__title">Order ID: {{ order._id }}</h2>
                    <p><strong>Address:</strong> {{ order.checkout_id.delivery_address }}</p>
                    <p><strong>Delivery Date:</strong> {{ formattedDate }}</p>
                    <p><strong>Total:</strong> ₦{{ order.checkout_id.total.toLocaleString() }}</p>
                </div>

                <div class="orderdetails__cart">
                    <h3 class="orderdetails__subtitle">Items</h3>

                    <div class="orderdetails__cart-item" v-for="item in cart" :key="item._id">
                        <img :src="item.image" alt="product image" class="orderdetails__cart-image" />
                        <div class="orderdetails__cart-details">
                            <p><strong>Name:</strong> {{ item.product?.name || 'Unnamed product' }}</p>
                            <p v-if="item.product?.metadata"><strong>Tags:</strong> {{ item.product.metadata }}</p>
                            <p><strong>Unit:</strong> {{ item.unit }}</p>
                            <p><strong>Price:</strong> ₦{{ item.price }}</p>
                            <p><strong>Quantity:</strong> {{ item.quantity }}</p>
                            <p><strong>Total:</strong> ₦{{ item.price * item.quantity }}</p>
                        </div>
                    </div>
                </div>

                <div class="orderdetails__actions">
                    <button class="button-primary transparent-button" v-if="showbacktoorders" @click="backToOrders">
                        <span>Back to Orders</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import ChatHeader from '@/components/ChatHeader.vue';

export default {
    name: 'OrderDisplay',
    components: {
        ChatHeader
    },
    props: {
        order: Object,
        cart: Array,
        showbacktoorders: Boolean
    },
    computed: {
        formattedDate() {
            const { day, date, month } = this.order.checkout_id.delivery_date
            return `${day}, ${month} ${date}`
        }
    },
    methods: {
        backToOrders() {
            this.$router.push({
                path: '/orders',
                query: {
                    ...this.$route.query,
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.orderdetails {
    &__header {
        @include fixed-header;
    }

    &__content {
        min-height: 100vh;
        position: relative;
        padding-top: 6rem;
        padding-bottom: 20rem;
        background: $white;
        display: flex;
        justify-content: center;

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

    &__title {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    &__summary {
        background: #f7f7f7;
        padding: 1.5rem;
        border-radius: 1rem;
        margin-bottom: 2rem;
        font-size: 1.3rem;

        p {
            margin: 0.5rem 0;
        }
    }

    &__subtitle {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    &__cart-item {
        display: flex;
        background: #f1f1f1;
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 1rem;
        align-items: center;

        font-size: 1.4rem;
    }

    &__cart-image {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 0.8rem;
        margin-right: 1rem;
    }

    &__cart-details {
        display: flex;
        flex-direction: column;

        p {
            margin: 0.3rem 0;
            line-height: 1.5;
        }

        p:nth-child(2) {
            font-style: italic;
            color: #666;
        }
    }

    &__actions {
        margin-top: 2rem;

        .button-primary {
            width: 100%;
            padding: 1rem;
            font-size: 1.4rem;
        }
    }
}
</style>