<template>
    <div class="otp-inputs">
        <div v-for="(digit, index) in otpLength" :key="index" class="otp-inputs__area">
            <input :ref="`otp${index}`" v-model="otpDigits[index]" type="text" inputmode="numeric" pattern="[0-9]*"
                maxlength="1" :disabled="disabled" @input="onInput(index)" @keydown="onKeydown($event, index)"
                @paste="onPaste" class="otp-input" />

        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { serverurl, handleFetchError } from '@/api';

export default {
    name: "OtpInputs",
    props: {
        otpLength: {
            type: Number,
            default: 6,
        },
        modelValue: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        setIsLoading: {
            type: Function
        },
    },
    computed: {
        ...mapState("user", {
            currentUser: (state) => state.currentUser
        }),
    },
    mounted() {
        this.$store.dispatch('user/setOtpMode', true);
    },
    beforeDestroy() {
        this.$store.dispatch('user/setOtpMode', false);
    },
    emits: ["update:modelValue"],
    data() {
        return {
            otpDigits: Array(this.otpLength).fill(""),
        };
    },
    watch: {
        otpDigits: {
            handler(val) {
                if (this.otpDigits.join("").length === 6) {
                    this.verifyOtp();
                }
            },
            deep: true,
        },
    },
    methods: {
        onInput(index) {
            let val = this.otpDigits[index];
            val = val.replace(/\D/g, ""); // Remove non-digits
            this.otpDigits[index] = val.slice(0, 1); // Enforce one digit

            if (val && index < this.otpLength - 1) {
                this.$refs[`otp${index + 1}`][0]?.focus();
            }
        },
        onKeydown(event, index) {
            if (event.key === "Backspace" && !this.otpDigits[index] && index > 0) {
                this.$refs[`otp${index - 1}`][0]?.focus();
            }
        },
        onPaste(event) {
            event.preventDefault();
            const pastedData = (event.clipboardData || window.clipboardData).getData("text");

            const numericValue = pastedData.replace(/\D/g, "");
            const digits = [...this.otpDigits];

            for (let i = 0; i < this.otpDigits.length && i < numericValue.length; i++) {
                digits[i] = numericValue[i];
            }

            this.otpDigits = digits;

            const lastFilledIndex = Math.min(numericValue.length, this.otpDigits.length);
            const focusRef = `otp${lastFilledIndex}`;

            if (this.$refs[focusRef] && this.$refs[focusRef][0]) {
                this.$refs[focusRef][0].focus();
            }
        },
        async verifyOtp() {
            try {
                this.$store.dispatch('user/setLoading', true);

                const otpDigits = this.otpDigits.join("");

                const response = await fetch(`${serverurl}/shopper/auth/verifyotp`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Origin': window.location.origin,
                        'Access-Control-Request-Method': 'POST',
                        'Access-Control-Request-Headers': 'Content-Type'
                    },
                    body: JSON.stringify({
                        submittedOtp: otpDigits
                    })
                });

                await handleFetchError(response)

                const status = response.status;

                if (status === 200) {
                    this.$store.dispatch('user/setLoading', false);

                    const data = await response.json();

                    const { user } = data;

                    const { token } = user;

                    this.$store.dispatch('user/setJwtToken', token);

                    this.$store.dispatch('user/addCurrentUser', user);

                    console.log(user, 'user, just user')

                    if (token && this.currentUser.name && this.currentUser.phoneNumber) {
                        const { email, phoneNumber, name, ...cleanQuery } = this.$route.query;
                        this.$router.push({ path: '/', query: cleanQuery });
                    }
                }
            } catch (error) {
                this.$store.dispatch('user/setLoading', false);
                this.otpDigits = Array(this.otpLength).fill("");
                this.loading = false;
                console.error('Network or server error during authentication:', error.message);
                throw error;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.otp-inputs {
    display: grid;
    grid-template-columns: repeat(6, 1fr); // 6 equal columns
    gap: 1rem;
    width: 100%; // or max-content depending on layout
}

.otp-input:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
    color: #aaa;
}


.otp-inputs__area {
    width: 100%;
    height: 5rem;
}

.otp-input {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 1.5rem;
    border: 1px solid rgba($primary-color, 0.2);
    border-radius: 4px;
    outline: none;
    transition: border 0.2s ease;

    &:focus {
        border-color: rgba($primary-color, 0.8);
    }

    &.filled {
        border-color: rgba($primary-color, 0.7);
    }
}
</style>