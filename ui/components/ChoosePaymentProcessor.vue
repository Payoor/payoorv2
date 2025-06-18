<template>
    <div>
        <div class="choosepaymentprocessor">
            <div class="choosepaymentprocessor__main">
                <h1 class="choosepaymentprocessor__h1">Pick a payment option</h1>

                <div class="choosepaymentprocessor__body">
                    <div v-if="loading" class="loading-indicator-wrapper">
                        <div class="spinner"></div>
                        <p>Loading payment methods...</p>
                    </div>

                    <div v-else class="choosepaymentprocessor__buttons">
                        <button @click="createOrderWithBaniPay" :disabled="paymentMethods.banipay === 'disabled'"
                            :class="{ 'disabled-button': paymentMethods.banipay === 'disabled' }">
                            <span class="logos">
                                <svg width="20" height="26" viewBox="0 0 20 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="w-[63.73px] h-[20px]">
                                    <g clip-path="url(#clip0_67_10095)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12.9269 11.5413C14.5628 12.5888 15.554 14.5562 15.1694 16.7158C14.8181 18.6848 13.2319 20.3058 11.2728 20.7168C8.04079 21.3964 5.17177 18.8721 5.17177 15.7495V8.07723V5.17177C5.17177 2.86793 3.30384 1 1 1V15.7893H1.00166C1.00331 21.5058 6.17286 25.9892 12.1181 24.8107C15.607 24.1196 18.4445 21.3268 19.1987 17.8511C20.4981 11.8645 15.9733 6.57725 10.212 6.57725C10.212 8.58606 11.2347 10.4573 12.9269 11.5413Z"
                                            fill="url(#paint0_linear_67_10095)"></path>
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_67_10095" x1="4.78367" y1="1" x2="20.4009"
                                            y2="21.3449" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00B0FF"></stop>
                                            <stop offset="0.524899" stop-color="#3D5AFE"></stop>
                                            <stop offset="1" stop-color="#5444F2"></stop>
                                        </linearGradient>
                                        <clipPath id="clip0_67_10095">
                                            <rect width="20" height="26" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <span class="label">Banipay</span>
                        </button>

                        <button @click="createOrderWithPayStack" :disabled="paymentMethods.paystack === 'disabled'"
                            :class="{ 'disabled-button': paymentMethods.paystack === 'disabled' }">
                            <span class="logos">
                                <img src="/svg/paystacklogo.svg" alt="Paystack Logo">
                            </span>
                            <span class="label">Paystack</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { serverurl, handleFetchError } from '@/api';

export default {
    data() {
        return {
            paymentMethods: { 
                banipay: 'enabled',
                paystack: 'enabled',
            },
            loading: true,
        };
    },
    mounted() {
        this.getPaymentMethods();
    },
    methods: {
        async getPaymentMethods() {
            this.loading = true; 

            try {
                const token = localStorage.getItem('jwt');

                const response = await fetch(
                    `${serverurl}/shopper/checkout/getpaymentmethods`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                            Origin: window.location.origin,
                            'Access-Control-Request-Method': 'POST',
                            'Access-Control-Request-Headers': 'Content-Type'
                        }
                    }
                );

                await handleFetchError(response);

                const data = await response.json();

                this.paymentMethods = { ...this.paymentMethods, ...data };
               // console.log('Payment Methods Status:', this.paymentMethods);

            } catch (error) {
                console.error('Error fetching payment methods:', error);
            } finally {
                this.loading = false; 
            }
        },
        createOrderWithPayStack() {
            if (this.paymentMethods.paystack === 'disabled') {
               // console.log('Paystack is currently disabled.');
                return; 
            }
            this.$router.push({
                path: '/paystack',
                query: {
                    ...this.$route.query,
                    prevpage: this.$route.path
                }
            });
        },
        createOrderWithBaniPay() {
            if (this.paymentMethods.banipay === 'disabled') {
                //console.log('Banipay is currently disabled.');
                return; 
            }
            this.$router.push({
                path: '/banipay',
                query: {
                    ...this.$route.query,
                    prevpage: this.$route.path
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes moveInUp {
    0% {
        opacity: 0;
        transform: translateY(10rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.choosepaymentprocessor {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba($white, .9);
    z-index: 3;
    //display: flex; 
    align-items: center;
    justify-content: center;

    &__main {
        background: $white;
        margin: 0 auto;
        border-radius: 1rem;
        padding: 3rem;
        border: .2px solid rgba($primary-color, .9);
        animation: moveInUp 0.5s ease-out forwards;
        position: relative;

        @include respond(tab-port) {
            margin: 17rem 2rem;
            padding: 3rem;
        }
    }

    &__body {
        display: flex;
        flex-direction: column; 
        align-items: center; 
        justify-content: center;
        min-height: 150px; 
    }

    &__h1 {
        text-align: center;
        font-size: 1.8rem;
        padding-top: 2rem;
        font-weight: 700;
        color: $primary-color;
    }

    &__buttons {
        padding: 3rem;
        display: flex;
        flex-direction: column;
        width: 100%;

        & button {
            background: transparent;
            border: none;
            outline: none;
            border-radius: 1rem;
            border: .2px rgba($black, .9) solid;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 1rem;
            transition: opacity 0.3s ease;

            &:nth-child(2) {
                margin-top: 2rem;
            }

            @include respond(tab-port) {
                padding: 1.5rem;
            }

            & span {
                display: flex;
                justify-content: center;
                align-items: center;

                &.logos {
                    height: 2rem;
                    width: 2rem;

                    & img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }

                    & svg {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }
                }

                &.label {
                    font-size: 1.6rem;
                    margin-left: 1rem;
                }
            }

            &.disabled-button {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }
    }

    .loading-indicator-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        color: $primary-color;
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
    }

    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: $primary-color;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
}
</style>