<template>
    <div class="payment">
        <div class="payment__content">
            <div v-if="authorizationUrl" class="payment__iframe-box">
                <iframe :src="authorizationUrl" class="payment__iframe" frameborder="0" allowpaymentrequest></iframe>
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
            authorizationUrl: null
        };
    },
    mixins: [jwt_mixin],
    mounted() {
        this.generatePaymentLink();
    },
    methods: {
        async generatePaymentLink() {
            try {
                const validToken = await this.getValidToken();
                const checkout_id = this.$route.query.checkout_id;

                const response = await fetch(`${serverurl}/shopper/paystack/generate-paystack-link?checkout_id=${checkout_id}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${validToken}`,
                        'Content-Type': 'application/json'
                    },
                });

                await handleFetchError(response)

                const data = await response.json();
                const paystackdata = data.data;

                const { authorizationUrl, reference, accessCode } = paystackdata

                this.authorizationUrl = authorizationUrl;

                console.log('Paystack link generated:', authorizationUrl, reference, accessCode);
                // maybe redirect or show the link?
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

    &__content {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 500px;
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
</style>
