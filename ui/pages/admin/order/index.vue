<template>
    <div class="orders">
        <div class="orders__content">
            <OrderDisplay :order="order" :cart="cart" />
        </div>
    </div>
</template>

<script>
import { serverurl, handleFetchError } from '@/api';

export default {
    data() {
        return {
            referenceId: null,
            order: {},
            cart: []
        }
    },
    methods: {
        async getOrdersByReference() {
            try {
                const { referenceId } = this;

                const response = await fetch(`${serverurl}/admin/orders/reference?referenceId=${referenceId}`, {
                    method: 'GET',
                    headers: {
                        //Authorization: `Bearer ${validToken}`,
                        'Content-Type': 'application/json',
                        'Origin': window.location.origin,
                        'Access-Control-Request-Method': 'POST',
                        'Access-Control-Request-Headers': 'Content-Type'
                    }
                });

                await handleFetchError(response)

                const data = await response.json();

                const { order, cart } = data;

                this.order = order;
                this.cart = cart;
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        const referenceId = this.$route.query.reference;
        this.referenceId = referenceId;
        this.getOrdersByReference();
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
}
</style>