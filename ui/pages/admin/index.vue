<template>
    <div class="adminlogin">
        <div class="adminlogin__content">
            <div class="adminlogin__form">
                <h2 class="adminlogin__title">Admin Login</h2>
                <form @submit.prevent="login">
                    <div class="adminlogin__field">
                        <label for="email">Email</label>
                        <input type="email" v-model="email" id="email" required />
                        <small v-if="email && !validEmail" class="adminlogin__error-msg">
                            Please enter a valid email.
                        </small>
                    </div>

                    <div class="adminlogin__field">
                        <label for="password">Password</label>
                        <input type="password" v-model="password" id="password" required />
                    </div>

                    <button type="submit" class="button-primary" :disabled="!canSubmit">
                        Login
                    </button>
                </form>
                <p v-if="error" class="adminlogin__error">{{ error }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { serverurl } from '@/api'

export default {
    name: 'AdminLogin',
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    computed: {
        validEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(this.email)
        },
        canSubmit() {
            return this.validEmail && this.password.trim().length > 0
        }
    },
    methods: {
        async login() {
            this.error = ''
            if (!this.canSubmit) return

            try {
                const response = await fetch(`${serverurl}/admin/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password
                    })
                })

                const data = await response.json()

                if (!response.ok) {
                    throw new Error(data.error || 'Login failed')
                }

                // Store token in localStorage or Vuex
                localStorage.setItem('admin_token', data.token)

                // Redirect to dashboard
                this.$router.push('/admin/dashboard')
            } catch (err) {
                this.error = err.message
            }
        }
    }
}
</script>

<style scoped lang="scss">
.adminlogin {
    &__content {
        min-height: 100vh;
        background: #f7f7f7;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }

    &__form {
        background: white;
        padding: 3rem;
        border-radius: 1.5rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
    }

    &__title {
        font-size: 2rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    &__field {
        margin-bottom: 1.5rem;

        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        input {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ccc;
            border-radius: 0.8rem;
            font-size: 1rem;
        }
    }

    .button-primary {
        width: 100%;
        padding: 1rem;
        font-size: 1.2rem;
        //background: #007bff;
        color: white;
        border: none;
        border-radius: 1rem;
        cursor: pointer;
        transition: background 0.3s;

        &:disabled {
            background: #a0a0a0;
            cursor: not-allowed;
        }

        &:hover:not(:disabled) {
            background: #0056b3;
        }
    }

    &__error {
        margin-top: 1rem;
        color: red;
        text-align: center;
        font-size: 1rem;
    }

    &__error-msg {
        color: #d9534f;
        font-size: 0.9rem;
        margin-top: 0.2rem;
        display: block;
    }
}
</style>