<template>
    <div>
        <div class="payment">
            <div class="payment__header">
                <ChatHeader :name="'Pay with Banipay'" :logovisible="false" :jwt="true" />
            </div>

            <div class="payment__content">
                <form id="paymentForm">
                    <div>Loading payment view...</div>
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
    </div>
</template>

<script>
import { mapState } from "vuex";
import { serverurl, handleFetchError } from '@/api';
import jwt_mixin from "@/mixins/jwt_mixin";

export default {
    data() {
        return {
            userId: "",
            email: "",
            name: "",
            phoneNumber: "",
            userAddress: "",
            total: 0
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
            script.onload = this.initializeBani;
            document.head.appendChild(script);
        },
        initializeBani() {
            if (typeof window === "undefined") return;

            const formattedPhone = "+234" + this.phoneNumber.replace(/^0+/, "");

            if (typeof BaniPopUp === "undefined") {
                console.error("BaniPopUp not loaded");
                return;
            }

            let handler = BaniPopUp({
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
                    //console.log("Bani Close Event:", response);
                    window.parent.postMessage({ type: "onClose", data: response }, "*");
                },
                callback: (response) => {
                    console.log("Bani Success Event:", response);
                    const message = { type: "onSuccess", data: response };
                    //console.log("Sending message to parent:", message);
                    window.parent.postMessage(message, "*");
                    //console.log("Message sent to parent");

                    const urlParams = new URLSearchParams(window.location.search);

                    //let redirectUrl = "https://payoor.store/paymentconfirmation";

                    // Redirect
                   // window.location.href = redirectUrl;
                },
            });
            handler;
        },
        async initWidget() {
            try {
                const validToken = await this.getValidToken();
                const checkout_id = this.$route.query.checkout_id;

                const response = await fetch(`${serverurl}/shopper/bani/getuserdetails?checkout_id=${checkout_id}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${validToken}`,
                        'Content-Type': 'application/json'
                    },
                });

                await handleFetchError(response)

                const data = await response.json();

                const {
                    name,
                    email,
                    phoneNumber,
                    userId,
                    total,
                    deliveryAddress
                } = data;

                console.log(name,
                    email,
                    phoneNumber,
                    userId,
                    total,
                    deliveryAddress)

                this.name = name;
                this.email = email;
                this.phoneNumber = phoneNumber;
                this.userAddress = deliveryAddress;
                this.userId = userId;
                this.total = total;

            } catch (error) {
                console.error('Network or server error:', error);
            }
        }
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
