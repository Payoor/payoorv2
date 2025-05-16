<template>
    <div class="cartbtn">
        <div v-if="!showicon" class="cartbtn__icon--amount">
            <p>&#8358;{{ cartTotal }}</p>
        </div>

        <div v-if="showicon" :class="{ 'disabled-btn': !cartLength || cartLength === 0 }">
            <div class="cartbtn__icon" @click="openCart">
                <div class="cartbtn__icon--total" v-if="cartLength !== 0">
                    <span>{{ cartLength === 0 ? '' : cartLength }}</span>
                </div>
                <svg>
                    <use v-bind:xlink:href="'/svg/symbol-defs.svg#icon-shopping-bag'"></use>
                </svg>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    props: ['showicon'],
    computed: {
        ...mapState("cart", {
            cartTotal: (state) => state.total,
            cartLength: (state) => state.totalItems.length
        }),
    },
    methods: {
        openCart() {
            if (this.cartLength === 0) {
                return;
            }

            this.$router.push({
                path: '/cart',
                query: {
                    ...this.$route.query,
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.cartbtn {
    color: $black;

    &__icon {
        width: 4.5rem;
        height: 4.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        background: $primary-color;
        padding: 1rem;
        border-radius: 100%;
        position: fixed;
        right: 2rem;
        bottom: 23rem;

        &--total {
            background: red;
            border-radius: 100%;
            color: #fff;
            font-size: 1.3rem;
            font-weight: 600;
            position: absolute;
            height: 2rem;
            width: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;

            left: -.4rem;
            top: -.4rem;
        }

        &--amount {
            color: $white;
            font-weight: 600;
        }
    }

    & svg {
        height: 80%;
        width: 80%;
        fill: $white;
    }
}
</style>