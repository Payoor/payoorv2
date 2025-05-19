<template>
    <div class="orders">
        <div class="orders__header">
            <div class="chatcart__header">
                <ChatHeader :name="'Your Orders'" :logovisible="false" :jwt="true" :backRoute="'/'" />
            </div>
        </div>

        <div class="orders__content" v-for="(order, index) in orders" :key="index">
            <OrderDisplay :order="order" :cart="order.cart" />
        </div>
    </div>
</template>

<script>
import { serverurl } from '@/api';

export default {
    data() {
        return {
            orders: []
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.orders {}
</style>