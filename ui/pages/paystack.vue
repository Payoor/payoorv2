<template>
    <div class="payment">
        <div class="payment__header">
            <ChatHeader :name="'Pay with Paystack'" :logovisible="false" :jwt="true" />
        </div>

        <div class="payment__content">
            <div v-if="loading" class="loading-indicator">
                Loading payment view...
            </div>
            <div v-else-if="authorizationUrl" class="payment__iframe-box">
                <iframe :src="authorizationUrl" class="payment__iframe" frameborder="0" allowpaymentrequest></iframe>
            </div>
            <div v-else class="error-message">
                Failed to load payment. Please try again.
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
            authorizationUrl: null,
            loading: true
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
            } catch (error) {
                console.error('Network or server error:', error);
                this.authorizationUrl = null;
            } finally {
                this.loading = false;
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
        align-items: center;
        text-align: center;
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

.loading-indicator,
.error-message {
    padding: 20px;
    font-size: 1.1rem;
    color: #555;
}

.error-message {
    color: #d9534f;
}
</style>