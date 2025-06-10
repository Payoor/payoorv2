<template>
    <div class="cartbtn">
        <div v-if="!showicon" class="cartbtn__icon--amount">
            <p>&#8358;{{ cartTotal }}</p>
        </div>

        <div v-if="showicon" :class="{ 'disabled-btn': !cartLength || cartLength === 0 }">
            <div class="cartbtn__icon" @click="openCart">
                <div v-if="isLoading" class="loader"></div>

                <template v-else>
                    <div class="cartbtn__icon--total" v-if="cartLength !== 0">
                        <span>{{ cartLength === 0 ? '' : cartLength }}</span>
                    </div>
                    <svg>
                        <use v-bind:xlink:href="'/svg/symbol-defs.svg#icon-shopping-bag'"></use>
                    </svg>
                </template>
            </div>
        </div>

    </div>
</template>

<script>
import { watchSyncEffect } from "vue";
import { mapState } from "vuex";

export default {
    props: ['showicon'],
    data() {
        return {
            isLoading: false, // Initialize loading state to false
        };
    },
    computed: {
        ...mapState("cart", {
            cartTotal: (state) => state.total,
            cartLength: (state) => state.totalItems.length
        }),
    },
    methods: {
        async syncCartAndOpen() {
            this.isLoading = true; // Set loading to true when the function starts
            try {
                await this.$store.dispatch("cart/syncCartToServer");

                this.$router.push({
                    path: '/cart',
                    query: {
                        ...this.$route.query,
                    }
                });
            } catch (error) {
                console.error("Error syncing cart:", error);
            } finally {
                this.isLoading = false; 
            }
        },
        openCart() {
            if (this.cartLength === 0) {
                return;
            }

            this.syncCartAndOpen();
        }
    }
}
</script>

<style lang="scss" scoped>
.cartbtn {
    color: $black;
    position: relative;

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
        right: 15rem;
        top: 3rem;

        @include respond(tab-port) {
            position: fixed;
            right: 2rem;
            bottom: 23rem;

            top: unset;
        }

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

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>