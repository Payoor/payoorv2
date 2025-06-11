<template>
    <div class="orders">
        <div class="orders__header">
            <div class="chatcart__header">
                <ChatHeader :name="'Your Orders'" :logovisible="false" :jwt="true" :backRoute="'/'" />
            </div>
        </div>

        <div class="orders__content">
            <div class="orders__content--body">

                <div v-if="singleOrder" class="order-card">
                    <OrderDisplay :order="singleOrder" :cart="singleOrder.cart" :showbacktoorders="true" />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import ChatHeader from '@/components/ChatHeader.vue';
import OrderDisplay from '@/components/OrderDisplay.vue';
import { serverurl, handleFetchError } from '@/api';

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
            singleOrder: null,
        };
    },
    async mounted() {
        this.jwt = localStorage.getItem('jwt');

        const orderId = this.$route.params.orderid || this.$route.query.orderid;

        await this.fetchOrderById(orderId);
    },
    methods: {
        async fetchOrderById(orderId) {
            try {
                const { jwt } = this;
                if (!jwt) return;

                const response = await fetch(
                    `${serverurl}/shopper/user/getorder?orderId=${orderId}`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${jwt}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );

                await handleFetchError(response);

                const data = await response.json();
                this.singleOrder = data.order;
                this.singleOrder.cart = data.cart;
            } catch (error) {
                console.error('Failed to load order:', error);
                this.$router.push('/orders');
            }
        },
        toggle(index) {
            this.$set(this.expanded, index, !this.expanded[index]);
        },
        formatDate(deliveryDate) {
            if (!deliveryDate) return '';
            const { day, date, month } = deliveryDate;
            return `${day}, ${month} ${date}`;
        },
    },
};
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
