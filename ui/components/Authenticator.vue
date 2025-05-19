<template>
    <div class="auth">

        <div class="auth__content">
            <div class="auth__header">
                <!--<figure class="auth__logo">
                    <img src="/imgs/logo.png" />
                </figure>-->
            </div>

            <div class="auth__htags">
                <h1 class="auth__h1">
                    <div>Your all in one</div>
                    <div class="auth__h1--bottom">
                        <p class="auth__h1--bottomp1">
                            <span>grocery</span>
                            <span class="line grow-bar">
                                <img src="imgs/9b0498221204fb302eeee0e4809573e18a95723b.png" />
                            </span>
                        </p class="auth__h1--bottomp2"> assistant
                    </div>
                </h1>

                <h2 class="auth__h2">Make a list and leave the rest to us</h2>
            </div>

            <figure class="auth__cartongif">
                <img src="/imgs/fca2af0aa016e2cc06a10067ea4eb64446dbedde.gif" />
            </figure>

            <!--<button class="auth__form--google">
                <span>
                    <img src="/svg/google.svg" />
                </span>

                <span>Continue with Google</span>
            </button>-->

            <div class="auth__formarea">
                <div class="auth__form slide-fade-in-up">

                    <div class="auth__input" v-if="!otp_view">
                        <input v-model="value" :type="auth_method" placeholder="Enter your email" />
                    </div>

                    <!--to do add phonenumber otp-->

                    <div class="auth__otp" v-if="otp_view">
                        <p class="auth__otp--header">We just sent you an otp</p>
                        <OtpInput @update:modelValue="handleOtpChange" :otpLength="6" />
                        <p class="auth__otp--resendbtn">
                            <span class="auth__otp--resendotp" v-if="allowResendOtp" @click="resendOtp">Resend
                                OTP</span>
                            <span class="auth__otp--resendotp disabled-btn" v-if="!allowResendOtp">Resend OTP</span>
                            <span class="auth__otp--counter">{{ allowResendOtpCounter }}</span>
                        </p>
                    </div>

                    <div class="auth__button" v-if="!otp_view">
                        <button class="button-primary slide-fade-in-up" v-if="allowSubmit" @click="submit">{{ loading ?
                            'Please wait...' :
                            'Start shopping' }}</button>

                        <button class="button-primary slide-fade-in-up disabled-btn" v-if="!allowSubmit">{{ loading ?
                            `Please
                            wait...` :
                            'Start shopping' }}</button>
                    </div>

                </div>
            </div>

            <div class="auth__or">
                <span></span>
            </div>

            <div class="auth__googlebtn">
                <GoogleBtn @update:authValue="handleAuthChange" />
            </div>


        </div>

    </div>
</template>

<script>
import { serverurl } from '@/api';
import GoogleBtn from './GoogleBtn.vue';

export default {
    data() {
        return {
            value: "",
            auth_method: 'email',
            loading: false,
            user_otp: "",
            otp_view: false,
            allowResendOtpCounter: 50,
            //allowResendOtp: false
        }
    },
    emits: ["update:authValue"],
    computed: {
        allowSubmit() {
            if (this.loading) {
                return false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!this.value || !emailRegex.test(this.value)) {
                return false;
            }

            return true;
        },
        allowResendOtp() {
            if (this.allowResendOtpCounter >= 1 || !this.otp_view) {
                return false;
            }

            if (this.otp_view && this.allowResendOtpCounter === 0) {
                return true;
            }
        }

    },
    methods: {
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

            this.getOtp();
        },
        handleOtpChange(value) {
            this.user_otp = value;

            if (this.user_otp.length === 6) {
                this.submitOtp();
            }
        },
        handleAuthChange(token) {
            this.$emit("update:authValue", token);
        },
        submit() {
            this.getOtp();
        },
        submitOtp() {
            this.verifyOtp();
        },
        async getOtp() {
            const { value } = this;

            this.loading = true;

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

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Authentication error:', errorData);
                    return;
                }


                const status = response.status;

                /*const data = await response.json();
                console.log('Authentication success:', data);
                this.loading = false;*/

                if (status === 200) {
                    const data = await response.json();
                    // console.log('Success:', data);
                    this.otp_view = true
                    this.loading = false;

                    this.startResendOtpCounter();
                }
            } catch (error) {
                this.loading = false;
                console.error('Network or server error during authentication:', error.message);
            }
        },
        async verifyOtp() {
            try {
                const { user_otp } = this;
                const response = await fetch(`${serverurl}/shopper/auth/verifyotp`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Origin': window.location.origin,
                        'Access-Control-Request-Method': 'POST',
                        'Access-Control-Request-Headers': 'Content-Type'
                    },
                    body: JSON.stringify({
                        submittedOtp: user_otp
                    })
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Authentication error:', errorData);
                    return;
                }

                const status = response.status;

                if (status === 200) {
                    const data = await response.json();
                    //console.log('Success:', data);
                    this.otp_view = true
                    this.loading = false;

                    const { user } = data;

                    //console.log(user.token)
                    this.$emit("update:authValue", user.token);
                }
            } catch (error) {
                this.loading = false;
                console.error('Network or server error during authentication:', error.message);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes growWidth {
    from {
        width: 0;
    }

    to {
        width: 13rem;
    }
}

.auth {
    height: 100vh;
    background: rgba($sky-blue-3, 1);
    padding: 1rem;
    display: flex;
    //align-items: center;

    &__logo {
        height: 4rem;
        width: auto;
        margin-bottom: 1rem;

        & img {
            height: 100%;
        }
    }

    &__formarea {
        width: 100%;

        padding: 0 10rem;

        position: relative;
        z-index: 8;

        @include respond(tab-port) {
            padding: 0;

            transform: translateY(-4rem);
        }
    }

    &__form {
        //margin-top: 20rem;
        border-radius: 1rem;
        padding: 1rem;
        margin: 0 auto;
        width: 100%;
        min-height: 3rem;
        border: 1px solid $primary-color;
        border-radius: 1rem;

        background: $white;

        &--google {
            cursor: pointer;
            background: transparent;
            width: 100%;
            color: rgba($black, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            outline: none;
            background: rgba($grey-background, .2);
            padding: 1.9rem 1rem;
            border-radius: 1rem;
            margin-bottom: 1rem;
            font-size: 2rem;
            font-weight: 600;

            & span {
                display: flex;
                justify-content: center;
                align-items: center;

                &:nth-child(1) {

                    margin-right: .5rem;
                    height: 2rem;
                    width: 2rem;

                    & img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }

    &__input {
        border-radius: 1rem;

        & input {
            outline: none;
            border: none;
            width: 100%;
            padding: 1rem;
            font-size: 2rem;

            background: $white;
        }
    }

    &__method {
        padding: 1rem;

        & button {
            background: transparent;
            border: none;
            font-size: 1.4rem;
            color: $primary-color;
            font-weight: 600;
        }
    }

    &__content {
        display: flex;
        align-items: center;

        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: $sky-blue-3;

        width: 100%;

        padding: 3rem 1rem;

        //transform: translateY(-10rem);
        border-radius: 1rem;

        height: 65rem;
        margin-top: 5rem;

        position: relative;
    }

    &__or {
        text-transform: uppercase;
        text-align: center;
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 1.6rem;
        margin: 1rem 0;
        margin-top: 2rem;
    }

    &__button {
        margin-top: 3rem;

        & button {
            font-size: 1.8rem;
            width: 100%;
            font-weight: 600;

            padding: 1.8rem;

            border-radius: 12px;
        }
    }

    &__h1 {
        font-size: 3.7rem;
        font-weight: 600;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 5rem;
        margin-bottom: 2rem;
        position: relative;

        &--bottom {
            display: flex;
        }

        &--bottomp1 {

            & span {
                display: inline-block;
                margin-right: 1rem;

                &.line {
                    position: absolute;
                    left: 2rem;
                    bottom: -1.6rem;
                    width: 13rem;
                    margin: 0;

                    & img {
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }

        &--bottomp2 {}
    }

    &__h2 {
        font-size: 2rem;
        text-align: center;
        font-weight: 500;
    }

    &__htags {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin-bottom: 3rem;
        width: 100%;

        margin-top: 5rem;

        transform: translateY(9rem);
    }

    &__googlebtn {
        position: relative;
        z-index: 4;

        @include respond(tab-port) {
            transform: translateY(-6rem);
        }
    }

    &__cartongif {
        height: 32rem;
        transform: translateY(5rem);

        & img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    &__cloud {
        height: 10rem;
        position: absolute;
        bottom: 0;
        z-index: 3;

        & img {
            object-fit: cover;
            height: 100;
            width: auto;
        }
    }

    &__otp {


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
}

.grow-bar {
    width: 0;
    animation: growWidth 1s ease-out forwards;
}
</style>