<template>
    <div class="payment">
        <div class="payment__header">
            <ChatHeader :name="'Pay with Banipay'" :logovisible="false" :jwt="true" />
        </div>

        <div class="payment__content">
            <form id="paymentForm">
                <div v-if="!baniWidgetLoaded">Loading payment view...</div>
                <div class="form-group">
                    <input type="tel" id="phone-number" :value="phoneNumber || ''" />
                    <input type="email" id="email" :value="email || ''" />
                    <input type="number" id="amount" :value="total" />
                    <input type="text" id="first-name" :value="name || ''" />
                    <input type="text" id="last-name" :value="name ? name + name : ''" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { handleFetch } from '@/api';
import jwt_mixin from "@/mixins/jwt_mixin";

export default {
    data() {
        return {
            userId: "",
            email: "",
            name: "",
            phoneNumber: "",
            userAddress: "",
            total: 0,
            baniWidgetLoaded: false
        }
    },
    mixins: [jwt_mixin],
    async mounted() {
        await this.initWidget();
        this.loadBaniScript();
    },
    methods: {
        loadBaniScript() {
            if (typeof window === "undefined") return;

            const script = document.createElement("script");
            script.src =
                "https://bani-assets.s3.eu-west-2.amazonaws.com/static/widget/js/window.js";
            script.onload = () => {
                this.initializeBani();
                this.baniWidgetLoaded = true;
            };
            document.head.appendChild(script);
        },
        initializeBani() {
            if (typeof window === "undefined") return;

            let finalPhoneNumber = this.phoneNumber;

            const cleanedFetchedPhone = String(finalPhoneNumber || '').replace(/\D/g, '');

            if (!cleanedFetchedPhone || (cleanedFetchedPhone.length !== 10 && cleanedFetchedPhone.length !== 11)) {
                //console.warn("Fetched phone number is invalid or empty. Generating a random phone number for BaniPopUp.");
                finalPhoneNumber = this.generateRandomNigerianPhoneNumber();
            } else {
                finalPhoneNumber = cleanedFetchedPhone;
            }

            const formattedPhone = "+234" + finalPhoneNumber.replace(/^0+/, "").trim();

            if (typeof BaniPopUp === "undefined") {
                console.error("BaniPopUp not loaded");
                return;
            }

            BaniPopUp({
                amount: this.total,
                phoneNumber: formattedPhone,
                email: this.email,
                firstName: this.name,
                lastName: this.name + this.name,
                merchantKey: "pub_prod_5AXXSMJ492485SQ4BTEPSY3EQPYTKD",
                bankTransferOnly: true,
                metadata: {
                    checkoutId: this.$route.query.checkout_id,
                    userId: this.userId
                },
                merchantRef: "ref-" + Math.random().toString(36).substr(2, 9),
                onClose: (response) => {
                    window.parent.postMessage({ type: "onClose", data: response }, "*");
                },
                callback: (response) => {
                    console.log("Bani Success Event:", response);
                    const message = { type: "onSuccess", data: response };
                    window.parent.postMessage(message, "*");
                },
            });
        },
        async initWidget() {
            try {
                const checkout_id = this.$route.query.checkout_id;

                const data = await handleFetch({
                    apiroute: 'shopper/bani/getuserdetails',
                    queries: { checkout_id },
                    method: 'GET'
                });

                const {
                    name,
                    email,
                    phoneNumber,
                    userId,
                    total,
                    deliveryAddress
                } = data;

                /*console.log("Data from API:", {
                    name,
                    email,
                    phoneNumber,
                    userId,
                    total,
                    deliveryAddress
                });*/

                this.name = name;
                this.email = email;
                this.phoneNumber = phoneNumber;
                this.userAddress = deliveryAddress;
                this.userId = userId;
                this.total = total;

            } catch (error) {
                console.error('Error in initWidget:', error);
            }
        },
        generateRandomNigerianPhoneNumber() {
            // Common Nigerian mobile network prefixes (e.g., 080, 081, 090, 070)
            const prefixes = ['803', '806', '810', '813', '814', '816', '703', '706', '903', '906', '802', '808', '812', '708', '902', '907', '805', '807', '815', '905', '705'];
            const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
            let suffix = '';
            for (let i = 0; i < 7; i++) {
                suffix += Math.floor(Math.random() * 10);
            }
            return randomPrefix + suffix;
        },
    }
}
</script>

<style lang="scss" scoped>
.payment {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: #f9f9f9;
    flex-direction: column;

    &__content {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 500px;
        min-height: 100vh;
    }

    &__iframe-box {
        width: 100%;
        height: 650px;
        border-radius: 1rem;
        overflow: hidden;
        background-color: white;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    &__iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
}

.form-group {
    display: none;
}
</style>