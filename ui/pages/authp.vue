<template>
    <div>
        <div class="auth-page">
            <div class="auth-page__content">
                <div class="auth-page__header unauth">
                    <ChatHeader :logovisible="true" :green="true" />
                </div>

                <div class="auth-page__formarea">
                    <div class="auth-page__formquest" :class="{ 'blur-effect': isLoading }">
                        <h1 class="auth-page__h1" v-if="!currentUser.email">
                            <span>What's your email Address</span>
                            <span>We'll send an otp to</span>
                            <span>authenticate it.</span>
                        </h1>

                        <h1 class="auth-page__h1" v-if="currentUser.email && currentUser.otpMode">
                            <span>We just sent <span class="auth-page__h1--email">{{ $route.query.email }} </span>an
                                otp. </span>
                            <span>kindly provide it to confirm email</span>
                            <span>(Please check spam if it doesn’t</span>
                            <span>appear in your inbox).</span>
                        </h1>

                        <h1 class="auth-page__h1"
                            v-if="currentUser.email && !currentUser.otpMode && !currentUser.phoneNumber">
                            <span>Kindly provide a valid phone</span>
                            <span>number</span>
                        </h1>

                        <h1 class="auth-page__h1"
                            v-if="currentUser.email && !currentUser.otpMode && currentUser.phoneNumber && !currentUser.name">
                            <span>Lastly, let us know your Name.</span>
                        </h1>

                        <div class="auth-page__otp" v-if="currentUser.email && currentUser.otpMode">
                            <OtpInput :disabled="isLoading" :setIsLoading="setIsLoading" :otpLength="6" />
                        </div>

                        <div v-if="currentUser.email && currentUser.otpMode">
                            <p class="auth-page__otp--resendbtn">
                                <span class="auth-page__otp--resendotp" v-if="allowResendOtp" @click="resendOtp">Resend
                                    OTP</span>
                                <span class="auth-page__otp--resendotp disabled-btn" v-if="!allowResendOtp">Resend
                                    OTP</span>
                                <span class="auth-page__otp--counter">{{ allowResendOtpCounter }}</span>
                            </p>
                        </div>
                    </div>

                    <div v-if="isLoading" class="auth-page__loading">
                        <LoadingAnimation />
                    </div>
                </div>

                <div class="auth-page__bottom">
                    <div>

                        <div class="blur-effect">
                            <ChatCategories :jwt="jwt" :prevent_click="true" />
                        </div>

                        <div :class="{ 'blur-effect': isLoading || currentUser.otpMode }">
                            <ChatInput :jwt="jwt" :getOtp="getOtp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { serverurl, handleFetchError } from '@/api';

export default {
    data() {
        return {
            user_identifier: "",
            allowResendOtpCounter: 50,
        }
    },
    mounted() {
        //this.loginWithGoogle();
    },
    computed: {
        ...mapState("user", {
            currentUser: (state) => state.currentUser,
            isLoading: (state) => state.loading
        }),
        isEmailMode() {
            return !this.currentUser.email;
        },
        isPhoneMode() {
            return !this.currentUser.phoneNumber;
        },
        isNameMode() {
            return !this.currentUser.name && this.currentUser.phoneNumber;
        },
        allowResendOtp() {
            if (this.allowResendOtpCounter >= 1 && this.currentUser.otpMode) {
                return false;
            }

            if (this.currentUser.otpMode && this.allowResendOtpCounter === 0) {
                return true;
            }
        }
    },
    methods: {
        setIsLoading() {
            this.isLoading = !this.isLoading;
        },
        async loginWithGoogle() {
            const domain = 'https://us-east-1umg3xqcyz.auth.us-east-1.amazoncognito.com'; // Your Cognito domain
            const clientId = '1tvnri1ecaqanirjd5t7u5kc17';
            const redirectUri = 'https://shop.payoor.store/';
            const scopes = ['openid', 'email', 'phone'].join('+'); // Optional: add 'profile' if you want name, picture, etc.

            const loginUrl = `${domain}/oauth2/authorize` +
                `?response_type=code` + // Using Authorization Code Flow
                `&client_id=${clientId}` +
                `&redirect_uri=${encodeURIComponent(redirectUri)}` +
                `&identity_provider=Google` +  // Redirect directly to Google
                `&scope=${scopes}`;

            window.location.href = loginUrl;
        },
        async getOtp(value) {
            this.user_identifier = value;
            this.$store.dispatch('user/setLoading', true);

            try {
                const response = await fetch(`${serverurl}/shopper/auth/mail`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Origin': window.location.origin,
                        'Access-Control-Request-Method': 'POST',
                        'Access-Control-Request-Headers': 'Content-Type'
                    },
                    body: JSON.stringify({
                        identifier: value
                    })
                });

                await handleFetchError(response);

                const status = response.status;

                if (status === 200) {
                    const data = await response.json();
                    console.log(data, 'otp sent');

                    this.$store.dispatch('user/setLoading', false);

                    this.startResendOtpCounter();
                }
            } catch (error) {
                console.log('there was an error sending the email request')
                this.$store.dispatch('user/setLoading', false);
                console.error('Network or server error during authentication:', error.message);
                throw error
            }
        },
        startResendOtpCounter() {
            const countdown = setInterval(() => {
                if (this.allowResendOtpCounter > 0) {
                    this.allowResendOtpCounter--;
                } else {
                    clearInterval(countdown);
                }
            }, 2000);
        },
        resendOtp() {
            this.allowResendOtpCounter = 50;
            this.startResendOtpCounter();

            this.getOtp(this.user_identifier);
        },
        /*handleOtpChange(value) {
            this.user_otp = value;

            if (this.user_otp.length === 6) {
                this.submitOtp();
            }
        },
        submitOtp() {
            this.verifyOtp();
        }*/
    }
}
</script>

<style lang="scss" scoped>
.auth-page {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    background: $sky-blue-3;

    &__header {
        @include fixed-header;
    }

    &__content {
        position: relative;

        //width: 80rem;
        overflow: hidden;

        @include respond(tab-port) {
            //width: auto;
        }
    }

    &__formarea {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        display: flex;
        align-items: center;
        padding: 3rem;
    }

    &__formquest {
        transform: translateY(-9rem);
    }

    &__h1 {
        font-size: 2.8rem;
        font-weight: 300;
        animation: fadeInUp 1s ease-out forwards;

        &--email {
            color: $primary-color;
            font-weight: 500;
            font-size: 2.5rem;
        }

        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }


    &__bottom {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        padding: 3rem;

        z-index: 5;
        background: $sky-blue-3;

        display: flex;
        justify-content: center;
        padding-bottom: .4rem;

        &--cart {
            display: none;

            @include respond(tab-port) {
                display: block;
            }
        }

        @include respond(tab-port) {
            padding: 0;
            padding-bottom: 0;
            display: block;
        }
    }

    &__otp {
        margin-top: 3rem;

        &--header {
            text-align: center;
            font-size: 1.6rem;
            margin-bottom: 2rem;
            color: $primary-color;
            font-weight: 600;
        }

        &--resendbtn {
            color: $primary-color;
            text-align: center;
            font-size: 1.6rem;
            font-weight: 500;
            margin-top: 1rem;
            cursor: pointer;
        }

        &--resendotp {
            text-decoration: underline;
        }

        &--counter {
            color: $black;
            font-size: 1.1rem;
        }
    }

    &__loading {
        position: fixed;
        top: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>