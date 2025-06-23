<template>
    <div>
        <div class="checkout">
            <div class="checkout__header">
                <ChatHeader :name="'Checkout'" :logovisible="false" :jwt="true" :backRoute="$route.query.prevpage" />
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
                            <h2>Phone Number</h2>
                            <span class="required">*</span>
                        </div>

                        <div class="checkout__section--value" :class="{ ...faint(phone_number) }">
                            <p>{{ phone_number.length ? phone_number : 'None Specified' }}</p>
                        </div>

                        <div class="checkout__section--btn">
                            <button class="button-primary"
                                @click="setPlaceholder('Enter your phone number', 'Phone number', 'phone_number')">
                                Add Phone Number
                            </button>
                        </div>
                    </div>


                    <div class="checkout__section">
                        <div class="checkout__section--header">
                            <h2>Delivery Date</h2>

                            <span class="required">*</span>
                        </div>


                        <div class="checkout__deliverydates">
                            <div class="checkout__datecard" v-for="(date_card, index) in deliveryDates" :key="index"
                                :class="{ 'current-deliverydate': delivery_date && delivery_date.dateid === index }"
                                @click="setDeliveryDate({ ...date_card })">
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
                            <h2>Promo code or Coupon</h2>

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

                        <div v-if="coupon_error_message" class="checkout__error">
                            ⚠️ {{ coupon_error_message }}
                        </div>
                    </div>

                </div>

                <div class="checkout__inputs" v-if="place_holder" @click.stop="setPlaceholder(false, false, null)">
                    <div class="checkout__inputs--body">
                        <div class="checkout__inputcontent slide-fade-in-up">
                            <h2 class="checkout__inputcontent--h2">{{ input_label }}</h2>

                            <div v-if="input_label === 'Delivery address'">
                                <AddressList :query="delivery_address" :selectAddressFromList="selectAddressFromList"
                                    :checkout_input="checkout_input" />
                            </div>

                            <div v-if="input_label === 'Delivery address'">
                                <div class="checkout__currentlocation">
                                    <span class="checkout__currentlocation--btn" @click.stop="getCurrentLocation">
                                        <template v-if="!locationLoading">
                                            📍 Use Your Current Location
                                        </template>
                                        <template v-else>
                                            <span class="loader"></span> Getting location...
                                        </template>
                                    </span>
                                </div>
                            </div>


                            <div class="checkout__input">
                                <input v-if="checkout_input === 'phone_number'" class="checkout__field" type="tel"
                                    inputmode="numeric" pattern="[0-9]*" v-model="checkout_inputs[checkout_input]"
                                    :placeholder="place_holder" @click.stop="" />

                                <textarea v-if="checkout_input === 'delivery_address'" class="checkout__field"
                                    v-model="checkout_inputs[checkout_input]" :placeholder="place_holder"
                                    @input="callAddressSearch" @click.stop="" ref="textarea"></textarea>

                                <textarea
                                    v-if="checkout_input !== 'phone_number' && checkout_input !== 'delivery_address'"
                                    class="checkout__field" v-model="checkout_inputs[checkout_input]"
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
                        <span class="subject">Final Total</span>

                        <span class="value">&#8358;{{ total }}</span>
                    </div>

                </div>

                <div class="checkout__bottom">
                    <div class="checkout__content--body">
                        <button class="button-primary" v-if="allowOrderCreation" @click="createOrder"
                            :class="{ 'disabled-btn': loading }">
                            {{ loading ? applyingCoupon ? 'Applying Coupon' : 'Creating your order...' : `Confirm Order`
                            }}
                        </button>
                        <!--<button class="button-primary" v-if="allowOrderCreation" @click="toggleProcessorChoice"
                            :class="{ 'disabled-btn': loading }">
                            {{ loading ? 'Creating your order...' : `Confirm Order` }}
                        </button>-->
                        <button class="button-primary disabled-btn" v-else>
                            Add required details to confirm
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { handleFetch } from '@/api';
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
            coupon_code_length: 10,
            coupon_discount: {},
            subtotal: 0,
            delivery_fee: 0,
            service_charge: 0,
            total: 0,
            input_label: '',
            place_holder: false,
            phone_number: '',
            checkout_inputs: {},
            checkout_input: null,
            locationLoading: false,
            coupon_error_message: '',
            showProcessorChoice: false,
            deliveryDates: [],
            applyingCoupon: false
        }
    },
    computed: {
        ...mapState("cart", {
            cartItems: (state) => state.items,
            cartTotalItems: (state) => state.totalItems,
            checkoutData: (state) => state.checkout
        }),
        ...mapState("user", {
            currentUser: (state) => state.currentUser
        }),
        allowOrderCreation() {
            const ready =
                this.delivery_address.trim().length > 0 &&
                this.delivery_address.trim() !== 'add a valid address' &&
                this.delivery_date !== null &&
                this.subtotal > 0 &&
                this.phone_number.trim().length > 0;

            return ready;
        },
        getNext7Days() {
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'];

            const result = [];
            const now = new Date();

            // Determine start offset
            const startOffset = now.getHours() >= 17 ? 1 : 0;

            for (let i = startOffset; i < startOffset + 7; i++) {
                const currentDate = new Date();
                currentDate.setDate(now.getDate() + i);

                result.push({
                    day: daysOfWeek[currentDate.getDay()],
                    date: currentDate.getDate(),
                    month: monthsOfYear[currentDate.getMonth()]
                });
            }

            return result;
        }

    },
    mounted() {
        this.initCheckout();
    },
    watch: {
        promo_code(newVal) {
            if (newVal.length === this.coupon_code_length) {
                this.applyPromoCode(newVal.trim());
            } else {
                this.coupon_discount = {};
                //showErrorMessage('invalid coupon code')
                //this.recalculateTotal();
            }
        }
    },
    methods: {
        async callAddressSearch(event) {
            console.log(event.target.value)
            const value = event.target.value;
            this.checkout_inputs['delivery_address'] = value;

            this.delivery_address = value;

            this.autoResize()
        },
        async reverseGeocode({ latitude, longitude }) {
            try {
                const data = await handleFetch({
                    apiroute: 'shopper/google/use-current-location',
                    queries: { lat: latitude, lng: longitude },
                    method: 'GET'
                });

                const { address, filteredResults } = data.data;

                this.selectAddressFromList(address, 'delivery_address');

                return data.data;
            } catch (err) {
                console.error('Reverse geocode error:', err);
                return null;
            }
        },
        getCurrentLocation() {
            if (!navigator.geolocation) {
                alert('Geolocation is not supported by your browser');
                return;
            }

            this.locationLoading = true;

            navigator.geolocation.getCurrentPosition(
                async position => {
                    const { latitude, longitude } = position.coords;
                    await this.reverseGeocode({ latitude, longitude });
                    this.locationLoading = false;
                },
                error => {
                    console.error('Geolocation error:', error);
                    alert('Unable to retrieve your location');
                    this.locationLoading = false;
                }
            );
        },
        async initCheckout() {

            if (!this.checkoutData) {
                if (this.$route.query.checkout_id) {
                    await this.$store.dispatch('cart/getCheckOutData', this.$route.query.checkout_id);
                }
            }

            console.log(this.checkoutData, 'const { } = this.checkoutData;')

            const {
                cart_items,
                created_at,
                delivery_address,
                delivery_date,
                delivery_fee,
                delivery_instruction,
                phone_number,
                promo_code,
                promo_code_type,
                service_charge,
                subtotal,
                total,
                deliveryDates,
                user_id,
                _id
            } = this.checkoutData || {};

            console.log(this.checkoutData, 'this.checkoutData')

            this.phone_number = phone_number || this.currentUser.phoneNumber;
            this.delivery_address = delivery_address;
            this.subtotal = subtotal;
            this.delivery_fee = delivery_fee;
            this.service_charge = service_charge;
            this.total = total;
            this.deliveryDates = deliveryDates

            this.setDeliveryDate({
                ...delivery_date,
            });
        },
        selectAddressFromList(formatted_address, checkout_input) {
            this.checkout_inputs[checkout_input] = formatted_address;

            this.delivery_address = this.checkout_inputs[checkout_input];
        },
        setDeliveryDate(deliver_date) {
            this.delivery_date = deliver_date;

            console.log(this.delivery_date)
        },
        async createOrder() {
            try {
                const checkoutId = this.$route.query.checkout_id;

                const finalCheckout = {
                    delivery_address: this.delivery_address.trim(),
                    delivery_date: this.delivery_date,
                    delivery_instruction: this.delivery_instruction.trim(),
                    promo_code: this.promo_code.trim(),
                    phone_number: this.phone_number.trim(),
                };

                this.loading = true;

                const data = await handleFetch({
                    apiroute: 'shopper/update/checkout',
                    queries: { checkoutId: checkoutId },
                    method: 'POST',
                    body: { checkout: finalCheckout },
                });

                const { updatedCheckout } = data;

                this.loading = false;

                this.$router.push({
                    path: '/payment',
                    query: {
                        checkout_id: updatedCheckout._id,
                        ...this.$route.query,
                        prevpage: this.$route.path
                    }
                });
            } catch (error) {
                console.error('Error creating order:', error);
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
            textarea.style.height = `${textarea.scrollHeight}px`;
        },
        setPlaceholder(place_holder, input_label, checkout_input) {
            this.input_label = input_label;
            this.place_holder = place_holder;
            this.checkout_input = checkout_input;

            if (checkout_input === 'delivery_address') {
                this.delivery_address = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : (this.delivery_address, this.checkout_inputs[checkout_input] = this.delivery_address);
            }

            if (checkout_input === 'phone_number') {
                this.phone_number = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : (this.phone_number, this.checkout_inputs[checkout_input] = this.phone_number);
            }

            if (checkout_input === 'delivery_instruction') {
                this.delivery_instruction = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : (this.delivery_instruction, this.checkout_inputs[checkout_input] = this.delivery_instruction);
            }

            if (checkout_input === 'promo_code') {
                this.promo_code = this.checkout_inputs[checkout_input] ? this.checkout_inputs[checkout_input] : (this.promo_code, this.checkout_inputs[checkout_input] = this.promo_code);

                //console.log(this.promo_code);
            }
        },
        async applyPromoCode(code) {
            try {
                this.loading = true;

                this.applyingCoupon = true;

                const checkout_id = this.$route.query.checkout_id;

                await this.$store.dispatch('cart/applyPromoCode', { code, checkout_id });

                await this.initCheckout();

                this.loading = false;

                this.applyingCoupon = false;
            } catch (error) {
                this.loading = false
            }
        },
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

        &[type="tel"] {
            height: auto;
            max-height: none;
            resize: none;
        }
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

    &__currentlocation {
        &--btn {
            margin-bottom: 1rem;
            display: inline-block;
            background: transparent;
            color: $primary-color;
            padding: 1rem;
            border: 1px solid $primary-color;
            border-radius: 12px;
            font-size: 1.2rem;
            font-weight: 500;
            position: relative;

            .loader {
                border: 2px solid #f3f3f3;
                border-top: 2px solid $primary-color;
                border-radius: 50%;
                width: 1.4rem;
                height: 1.4rem;
                display: inline-block;
                vertical-align: middle;
                margin-right: 0.5rem;
                animation: spin 0.8s linear infinite;
            }
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}

.checkout__error {
    color: red;
    margin-top: 1rem;
    font-weight: 500;
    text-align: center;
    display: flex
}
</style>