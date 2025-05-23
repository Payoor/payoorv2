<template>
    <div class="orders">
        <div class="orders__header">
            <div class="chatcart__header">
                <ChatHeader :name="'Your Orders'" :logovisible="false" :jwt="true" :backRoute="'/'" />
            </div>
        </div>

        <div class="orders__content">
            <div class="orders__content--body">
                <div v-if="loading" class="orders__loading">
                    <div class="spinner"></div>
                </div>

                <div v-else-if="orders.length === 0" class="orders__empty">
                    <p>You haven’t placed any orders yet.</p>
                </div>

                <div v-else>
                    <div v-for="(order, index) in orders" :key="order._id" class="order-card">
                        <div class="order-card__header" @click="toggle(index)">
                            <p><strong>Order ID:</strong> {{ order._id }}</p>
                            <p><strong>Total:</strong> ₦{{ order.checkout_id.total.toLocaleString() }}</p>
                            <p><strong>Date:</strong> {{ formatDate(order.checkout_id.delivery_date) }}</p>
                            <button class="order-card__togglecart transparent-button">
                                {{ expanded[index] ? 'Hide Cart' : 'View Cart' }}
                            </button>
                        </div>

                        <transition name="fade">
                            <OrderDisplay v-if="expanded[index]" :order="order" :cart="order.cart"
                                :showbacktoorders="false" />
                        </transition>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import ChatHeader from '@/components/ChatHeader.vue';
import OrderDisplay from '@/components/OrderDisplay.vue';
import { serverurl } from '@/api';

export default {
    name: 'UserOrders',
    components: {
        ChatHeader,
        OrderDisplay,
    },
    data() {
        return {
            jwt: null,
            orders: [],
            expanded: [],
            loading: true
        }
    },
    mounted() {
        this.jwt = localStorage.getItem('jwt');
        this.getUserOrders();
    },
    methods: {
        async getUserOrders() {
            this.loading = true; // 👈 Start loading

            try {
                const { jwt } = this;
                if (!jwt) return;

                const response = await fetch(`${serverurl}/shopper/user/getorders`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${jwt}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        localStorage.removeItem('jwt');
                        this.$router.push({ path: '/', query: this.$route.query });
                    }
                    throw new Error('Unauthorized');
                }

                const data = await response.json();
                this.orders = data.orders;
                this.expanded = this.orders.map(() => false);
            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false; // 👈 End loading
            }
        },
        toggle(index) {
            this.$set(this.expanded, index, !this.expanded[index]);
        },
        formatDate(deliveryDate) {
            if (!deliveryDate) return '';
            const { day, date, month } = deliveryDate;
            return `${day}, ${month} ${date}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.orders {
    &__header {
        @include fixed-header;
    }

    &__content {
        position: relative;
        padding-bottom: 20rem;
        background: $white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;
        min-height: 100vh;

        @include respond(phone) {
            padding: 1rem;
            padding-top: 7rem;
            display: block;
            padding-bottom: 30rem;
        }

        &--body {
            width: 60rem;

            @include respond(tab-port) {
                width: 100%;
            }
        }
    }

    &__empty {
        text-align: center;
        font-size: 1.3rem;
        color: #777;
        padding: 2rem;
    }
}

.order-card {
    border: 1px solid #e2e2e2;
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 2rem;
    background: #fafafa;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        cursor: pointer;



        p {
            margin: 0.5rem 0;
            font-size: 1.5rem;
        }

        .toggle-btn {
            background: none;
            border: none;
            font-weight: bold;
            color: #007bff;
            cursor: pointer;
        }
    }

    &__togglecart {
        color: $primary-color;
        font-size: 1.4rem;
        border: none;
        font-weight: 600;
    }

    &__loading {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5rem 0;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
</style>
