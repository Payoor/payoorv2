<template>
    <div>
        <div v-if="loading" class="chatoption__loader">
            <div class="spinner"></div>
        </div>

        <div class="chatoption slide-fade-in-up" v-else-if="option">
            <div class="chatoption__left">
                <figure class="chatoption__img">
                    <img v-lazy="option.image.length ? option.image : option.productimg" />
                </figure>

                <div class="chatoption__details">
                    <p class="chatoption__details--name">{{ option.unit }}</p>

                    <p class="chatoption__details--price">
                        &#8358;
                        <span>{{ formatPrice(option.price) }}</span>
                    </p>
                </div>
            </div>

            <div class="chatoption__right">
                <div class="chatoption__delete" @click="removeItem">
                    <span class="svg">
                        <svg>
                            <use v-bind:xlink:href="'/svg/symbol-defs.svg#icon-trash'"></use>
                        </svg>
                    </span>
                </div>

                <div class="chatoption__quantity">
                    <span class="svg" @click="decrementQuantity">
                        <svg>
                            <use v-bind:xlink:href="'/svg/symbol-defs.svg#icon-minus1'"></use>
                        </svg>
                    </span>

                    <span class="quantity">{{ quantity }}</span>

                    <span class="svg" @click="incrementQuantity">
                        <svg>
                            <use v-bind:xlink:href="'/svg/symbol-defs.svg#icon-plus'"></use>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { serverurl } from '@/api';
import jwt_mixin from "@/mixins/jwt_mixin";
import { mapState } from "vuex";

export default {
    mixins: [jwt_mixin],
    props: {
        data: {
            type: Object,
        },
        mongooseid: {
            type: String,
        }
    },
    data() {
        return {
            quantity: 0,
            option: null,
            loading: false
        }
    },
    mounted() {
        if (this.data) {
            this.option = this.data;
        } else {
            this.getOption();
        }

        if (this.mongooseid) {
            this.quantity = this.cartItems[this.mongooseid] ? this.cartItems[this.mongooseid] : 0
        } else {
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');

            this.quantity = cartItems[this.data._id] ? cartItems[this.data._id] : 0
        }
    },
    computed: {
        ...mapState("cart", {
            cartTotal: (state) => state.total,
            cartItems: (state) => state.items,
            cartLength: (state) => state.totalItems.length
        }),
    },
    /*
        stump
    watch: {
        cartItems: {
            handler(newItems) {
                console.log('this just ran', newItems)

                const safeCartItems = newItems || {};
                const safeCartLength = Object.keys(safeCartItems).length;
                const total = this.cartTotal;

                localStorage.setItem('cartItems', JSON.stringify(safeCartItems));
                localStorage.setItem('cartTotal', JSON.stringify(total));
                localStorage.setItem('cartLength', JSON.stringify(safeCartLength));
            },
            deep: true,
            immediate: true
        }
    },*/
    methods: {
        syncCartToLocalStorage(newItems = this.cartItems) {
            //  console.log('syncCartToLocalStorage ran', newItems);

            const safeCartItems = newItems || {};
            const safeCartLength = Object.keys(safeCartItems).length;
            const total = this.cartTotal;

            try {
                localStorage.setItem('cartItems', JSON.stringify(safeCartItems));
                localStorage.setItem('cartTotal', JSON.stringify(total));
                localStorage.setItem('cartLength', JSON.stringify(safeCartLength));
            } catch (err) {
                console.error('Failed to sync cart to localStorage:', err);
            }
        },
        async getOption() {
            this.loading = true; // 👈 Start loading
            const token = await this.getValidToken();

            try {
                const response = await fetch(`${serverurl}/shopper/getoption?mongooseid=${this.mongooseid}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Origin': window.location.origin,
                        'Access-Control-Request-Method': 'POST',
                        'Access-Control-Request-Headers': 'Content-Type'
                    }
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error performing autocomplete:', errorData);
                    return;
                }

                const data = await response.json();
                const { variant } = data;
                this.option = variant;
            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false; // 👈 End loading
            }
        },
        formatPrice(price) {
            return price ? price.toLocaleString() : 0;
        },
        incrementQuantity() {
            this.quantity++;

            //  console.log(typeof this.option.price, 'this.price')

            this.$store.dispatch("cart/addItem", { id: this.option._id, quantity: this.quantity, price: this.option.price });

            this.syncCartToLocalStorage()
        },
        decrementQuantity() {
            if (this.quantity > 0) {
                this.quantity--;

                this.$store.dispatch("cart/removeItem", { id: this.option._id, quantity: this.quantity, price: this.option.price });
            }

            this.syncCartToLocalStorage()
        },
        removeItem() {
            if (this.quantity > 0) {
                this.quantity = 0;

                this.$store.dispatch("cart/removeItem", { id: this.option._id, quantity: this.quantity, price: this.option.price });
            }

            this.syncCartToLocalStorage()
        }
    }
}
</script>

<style lang="scss" scoped>
.chatoption {
    border-radius: 1rem;
    padding: 2rem 1.5rem;

    margin-bottom: 2rem;
    background-color: rgba($white, 1);

    display: flex;
    justify-content: space-between;

    border: 2px solid rgba($primary-color, .5);

    &__loader {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 12rem;
    }

    &__left {
        display: flex;
    }

    &__details {

        &--name {
            font-size: 1.7rem;
            font-weight: 600;
            margin-bottom: 1.2rem;
        }

        &--price {
            font-size: 1.6rem;
            font-weight: 600;
            display: flex;

            & span {
                font-size: 600;
                color: rgba($primary-color, 1);
            }
        }
    }

    &__right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;

    }

    &__img {
        height: 10rem;
        width: 10rem;
        border-radius: 1rem;
        overflow: hidden;
        margin-right: .5rem;

        & img {
            object-fit: cover;
            height: 100%;
            width: 100%;
            ;
        }
    }

    &__delete {}

    &__quantity {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}

span {
    display: flex;
    justify-content: center;
    align-items: center;

    &.quantity {
        font-size: 1.5rem;
        font-weight: 600;
    }

    &.svg {

        border: 1px solid rgba($primary-color, .5);
        padding: .5rem;
        border-radius: .5rem;

        & svg {
            height: 2rem;
            width: 2rem;
            fill: rgba($black, .5);

            &.red {
                fill: red;
            }
        }
    }
}
</style>