<template>
    <div>
        <div class="checkout">
            <div class="checkout__header">
                <ChatHeader :name="'Checkout'" :logovisible="false" :jwt="true" :backRoute="'/cart'" />
            </div>

            <div class="checkout__content">

                <div class="checkout__data checkout__content--body">


                    <div class="checkout__section">
                        <div class="checkout__section--header">
                            <h2>Delivery Address</h2>

                            <span class="required">*</span>
                        </div>

                        <div class="checkout__section--value" :class="{ ...faint(delivery_address) }">
                            <p>{{ delivery_address.length ? delivery_address : 'None Specified' }}</p>
                        </div>

                        <div class="checkout__section--btn">
                            <button class="button-primary"
                                @click="setPlaceholder('Set delivery address', 'Delivery address', 'delivery_address')">Change</button>
                        </div>
                    </div>

                    <div class="checkout__section">
                        <div class="checkout__section--header">
                            <h2>Delivery Date</h2>

                            <span class="required">*</span>
                        </div>


                        <div class="checkout__deliverydates">
                            <div class="checkout__datecard" v-for="(date_card, index) in getNext7Days" :key="index"
                                :class="{ 'current-deliverydate': delivery_date && delivery_date.id === index }"
                                @click="setDeliveryDate({ ...date_card, id: index })">
                                <span>{{ date_card.day }}</span>
                                <span class="number">{{ date_card.date }}</span>
                                <span>{{ date_card.month }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="checkout__section">
                        <div class="checkout__section--header">
                            <h2>Delivery Instruction</h2>

                            <span class="required"></span>
                        </div>

                        <div class="checkout__section--value" :class="{ ...faint(delivery_instruction) }">
                            <p>{{ delivery_instruction.length ? delivery_instruction : 'None' }}</p>
                        </div>

                        <div class="checkout__section--btn">
                            <button class="button-primary"
                                @click="setPlaceholder('delivery instruction', `Give us specific instruction like;
                            Cutting your beef, peeling your yam, cutting your veggies, Leave item with house keeper etc.`, 'delivery_instruction')">Specify</button>
                        </div>
                    </div>

                    <div class="checkout__section">
                        <div class="checkout__section--header">
                            <h2>Promo code</h2>

                            <span class="required"></span>
                        </div>

                        <div class="checkout__section--value" :class="{ ...faint(promo_code) }">
                            <p>{{ promo_code.length ? promo_code : 'None' }}</p>
                        </div>

                        <div class="checkout__section--btn">
                            <button class="button-primary"
                                @click="setPlaceholder('promo code', 'Do you have a promo code? Use it!', 'promo_code')">Use
                                promo
                                code</button>
                        </div>
                    </div>

                </div>

                <div class="checkout__inputs" v-if="place_holder" @click.stop="setPlaceholder(false, false, null)">
                    <div class="checkout__inputs--body">
                        <div class="checkout__inputcontent slide-fade-in-up">
                            <h2 class="checkout__inputcontent--h2">{{ input_label }}</h2>

                            <div class="checkout__input">
                                <textarea class="checkout__field" v-model="checkout_inputs[checkout_input]"
                                    :placeholder="place_holder" @input="autoResize" @click.stop=""
                                    ref="textarea"></textarea>
                            </div>

                            <div class="checkout__bottom">
                                <button class="button-primary"
                                    @click.stop="setPlaceholder(false, false, checkout_input)">Done</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="checkout__summary">
                    <div class="checkout__summaryitem">
                        <span class="subject">Sub-total</span>

                        <span class="value">&#8358;{{ subtotal }}</span>
                    </div>

                    <div class="checkout__summaryitem">
                        <span class="subject">Delivery Fee</span>

                        <span class="value">&#8358;{{ delivery_fee }}</span>
                    </div>

                    <div class="checkout__summaryitem">
                        <span class="subject">Service Charge</span>

                        <span class="value">&#8358;{{ service_charge }}</span>
                    </div>

                    <div class="checkout__summaryitem">
                        <span class="subject">Total</span>

                        <span class="value">&#8358;{{ total }}</span>
                    </div>

                </div>

                <div class="checkout__bottom">
                    <div class="checkout__content--body">
                        <button class="button-primary disabled-btn" v-if="!allowOrderCreation">Confirm
                            Order</button>
                        <button class="button-primary" v-if="allowOrderCreation" @click="createOrder"
                            :class="{ 'disabled-btn': loading }">{{ loading ? 'Creating your order...' : `Confirm
                            Order`}}</button>
                    </div>
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
    data() {
        return {
            delivery_address: "",
            delivery_date: null,
            delivery_instruction: "",
            promo_code: "",
            subtotal: 0,
            delivery_fee: 0,
            service_charge: 0,
            total: 0,
            input_label: '',
            place_holder: false,

            checkout_inputs: {},
            checkout_input: null
        }
    },
    computed: {
        ...mapState("cart", {
            //cartTotal: (state) => state.total,
            cartItems: (state) => state.items,
            cartTotalItems: (state) => state.totalItems
        }),
        allowOrderCreation() {
            const ready =
                this.delivery_address.trim().length > 0 &&
                this.delivery_date !== null &&
                this.subtotal > 0;

            //console.log('Allow Order Creation:', ready);
            return ready;
        },
        getNext7Days() {
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'];

            const result = [];

            for (let i = 0; i < 7; i++) {
                const currentDate = new Date();
                currentDate.setDate(currentDate.getDate() + i);

                result.push({
                    day: daysOfWeek[currentDate.getDay()],
                    date: currentDate.getDate(),
                    month: monthsOfYear[currentDate.getMonth()]
                });
            }

            return result;
        },
    },
    mounted() {
        this.initCheckout();
    },
    methods: {
        async initCheckout() {
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
            const cartTotal = JSON.parse(localStorage.getItem('cartTotal') || '0');

            if (!cartItems) {
                return;
            }

            const validToken = await this.getValidToken();

            //  console.log('Cart Items:', cartItems);
            //console.log('Cart Total:', cartTotal);

            if (validToken) {
                const response = await fetch(`${serverurl}/shopper/init/checkout?jwt=${this.validToken}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${validToken}`,
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

                const { fee, servicecharge } = data;

                this.subtotal = cartTotal

                this.delivery_fee = fee;

                const service_charge = (servicecharge / 100) * cartTotal;
                this.service_charge = service_charge;

                this.total = this.service_charge + this.delivery_fee + this.subtotal

                // console.log(data)
            }
        },
        setDeliveryDate(deliver_date) {
            this.delivery_date = deliver_date;

            console.log(this.delivery_date)
        },
        async createOrder() {
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

            const checkout = {
                delivery_address: this.delivery_address.trim(),
                delivery_date: this.delivery_date,
                delivery_instruction: this.delivery_instruction.trim(),
                promo_code: this.promo_code.trim(),
                cart_items: cartItems,
                subtotal: this.subtotal,
                delivery_fee: this.delivery_fee,
                service_charge: this.service_charge,
                total: this.total
            };

            try {
                this.loading = true;

                const validToken = await this.getValidToken();

                const response = await fetch(`${serverurl}/shopper/create/checkout?jwt=${this.validToken}`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${validToken}`,
                        'Content-Type': 'application/json',
                        'Origin': window.location.origin,
                        'Access-Control-Request-Method': 'POST',
                        'Access-Control-Request-Headers': 'Content-Type'
                    },
                    body: JSON.stringify({ checkout })
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error performing autocomplete:', errorData);
                    return;
                }

                const data = await response.json();

                const { newcheckout } = data;

                console.log(newcheckout)

                this.loading = false;

                this.$router.push({
                    path: '/payment',
                    query: {
                        checkout_id: newcheckout._id
                    }
                });
            } catch (error) {
                console.log(error)
            }
        },
        faint(value) {
            return {
                'faint': !value || !value.length
            }
        },
        autoResize() {
            const textarea = this.$refs.textarea;
            textarea.style.height = "auto"; // reset
            textarea.style.height = `${textarea.scrollHeight}px`; // set to content height
        },
        setPlaceholder(place_holder, input_label, checkout_input) {
            this.input_label = input_label;
            this.place_holder = place_holder;
            this.checkout_input = checkout_input;

            if (checkout_input === 'delivery_address') {
                this.delivery_address = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : '';
            }

            if (checkout_input === 'delivery_instruction') {
                this.delivery_instruction = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : '';
            }

            if (checkout_input === 'promo_code') {
                this.promo_code = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : '';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.checkout {

    &__header {
        @include fixed-header;
    }


    &__section {
        border: 1px solid $primary-color;
        border-radius: 1rem;
        padding: 1rem 1.5rem;

        margin-bottom: 2rem;

        &--header {
            display: flex;
            align-items: center;
            margin-bottom: .5rem;

            & h2 {
                display: flex;
                align-items: center;
                margin-right: .5rem;
                font-size: 1.3rem;
            }

            & span {
                display: flex;
                align-items: center;

                &.required {
                    color: red
                }
            }
        }

        &--value {
            font-size: 1.5rem;

            &.faint {
                color: rgba($black, .7);
            }
        }

        &--btn {
            margin-top: 1rem;

            & button {
                border-radius: 3rem;
                padding: .6rem 1.6rem;
                font-size: 1.5rem;
            }
        }
    }

    &__deliverydates {

        /*display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;*/

        display: flex;
        overflow: hidden;
        overflow-x: scroll;

        @include hide-scrollbar;
    }

    &__datecard {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border: 1px solid $primary-color;
        border-radius: 1rem;

        flex-shrink: 0;
        width: 7rem;
        margin-right: 2rem;

        &.current-deliverydate {
            background: $primary-color;
            color: $white;

            & span {
                font-weight: 600;

                &.number {
                    font-weight: 600;
                    font-size: 1.7rem;
                }
            }
        }

        & span {

            &.number {
                font-weight: 600;
                font-size: 1.7rem;
            }
        }
    }

    &__inputs {
        position: fixed;

        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        z-index: 6;
        background: rgba($black, .7);

        display: flex;
        justify-content: center;

        &--flex {}

        &--body {
            width: 60rem;

            @include respond(tab-port) {
                width: 100%;
            }
        }
    }

    &__input {
        min-height: 21rem;

        width: 60rem;

        @include respond(tab-port) {
            width: 100%;
        }
    }

    &__inputcontent {
        position: fixed;
        bottom: 0;
        left: 0;
        background: $white;
        width: 100%;
        //height: 28rem;
        border-radius: 2rem 2rem 0 0;
        padding: 2rem;

        display: flex;
        flex-direction: column;
        align-items: center;

        @include respond(tab-port) {
            display: block;
        }

        & h2 {
            font-size: 1.2rem;
            font-weight: 500;
            line-height: 2rem;
            font-style: italic;
            color: rgba($black, .7);

            margin-bottom: 1.5rem;
        }
    }

    &__field {
        border: none;
        outline: none;
        width: 100%;
        min-height: 3rem;
        max-height: 15rem; // set your limit here
        resize: none;
        overflow-y: auto;
        color: $white;
        background: transparent;
        line-height: 1.5;

        font-size: 2.1rem;
        background: $input-black;
        padding: 1rem;
        border-radius: 1rem;
    }

    &__summary {
        width: 60rem;

        @include respond(tab-port) {
            width: auto;
        }
    }

    &__summaryitem {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;

        & span {

            &.subject {
                color: $primary-color;
                font-size: 1.4rem;
                font-weight: 600;
            }

            &.value {
                color: $black;
                font-size: 1.4rem;
                font-weight: 600;
            }
        }
    }

    &__bottom {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        z-index: 4;

        background: $white;
        padding: 1rem;
        padding-bottom: 2rem;



        display: flex;
        justify-content: center;

        @include respond(tab-port) {
            display: block
        }

        & button {
            font-size: 2rem;
            padding: 2rem;

            width: 60rem;

            @include respond(tab-port) {
                width: 100%;
            }
        }
    }

    &__content {
        position: relative;
        padding-bottom: 20rem;
        background: $white;

        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;

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