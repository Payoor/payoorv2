<template>
    <div class="google-button">
        <button class="google-btn" @click="startGoogle">
            <span class="google-btn__icon">
                <svg viewBox="0 0 48 48">
                    <path fill="#EA4335"
                        d="M24 9.5c3.54 0 6.73 1.22 9.24 3.61l6.9-6.9C35.64 2.17 30.2 0 24 0 14.64 0 6.44 5.38 2.56 13.22l8.06 6.26C12.48 13.16 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4"
                        d="M46.5 24.5c0-1.63-.15-3.2-.42-4.7H24v9h12.7c-.55 2.96-2.21 5.46-4.71 7.14l7.2 5.6C43.9 37.24 46.5 31.36 46.5 24.5z" />
                    <path fill="#FBBC05"
                        d="M10.62 28.48A14.5 14.5 0 0 1 9.5 24c0-1.55.27-3.05.75-4.44l-8.06-6.26A24 24 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l8.06-6.3z" />
                    <path fill="#34A853"
                        d="M24 48c6.2 0 11.4-2.05 15.2-5.56l-7.2-5.6c-2 1.34-4.55 2.16-8 2.16-6.26 0-11.52-3.66-13.38-8.98l-8.06 6.3C6.44 42.62 14.64 48 24 48z" />
                </svg>
            </span>

            <span class="google-btn__text">
                <slot>Continue with Google</slot>
            </span>
        </button>
    </div>
</template>

<script>
import { startGoogleLogin } from '~/utils/googleAuth'

export default {
    data() {
        return {
            statusType: "idle",
            statusText: "Idle",
            busy: false,
        };
    },
    methods: {
        async startGoogle() {
            /* if (this.busy) return;
 
             this.busy = true;
             this.statusType = "loading";
             this.statusText = "Redirecting with Google...";
 
             // Redirect-based OAuth login
             // This triggers the auth strategy "google"
             await this.$auth.loginWith("google");
             // After callback, Nuxt auth will redirect to /dashboard (auth.redirect.home)
             // 
             */

            try {
                await startGoogleLogin();
            } catch (error) {
                console.error('Google login start failed:', error)
            }
        },
    }
};
</script>

<style scoped lang="scss">
.google-button {
    //min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box;

    position: relative;
    z-index: 10;
}

.google-btn {
    width: 39.5rem;
    height: 3rem;
    max-width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    font-size: 1.6rem;
    font-weight: 600;
    padding: 2.5rem;
    background: #000;
    color: #fff;
    border-radius: 1rem;
    border: none;

    font-family: Roboto, Arial, sans-serif;
    font-size: 0.95rem;
    font-weight: 500;

    cursor: pointer;

    padding: 0 1rem;

    box-shadow: 0 0.0625rem 0.125rem rgba(60, 64, 67, 0.1);
    transition: all 0.2s ease;

    animation: fadeInUp 0.5s ease-out forwards;
}

/* Hover */
.google-btn:hover {
    box-shadow: 0 0.125rem 0.375rem rgba(60, 64, 67, 0.2);
    border-color: #c6c6c6;
}

/* Active */
.google-btn:active {
    background: #f8f9fa;
    transform: scale(0.985);
}

/* Icon */
.google-btn__icon {
    display: flex;
    align-items: center;
}

.google-btn__icon svg {
    width: 1.25rem;
    height: 1.25rem;
}

/* Text */
.google-btn__text {
    white-space: nowrap;
}

/* ----------------------------------------
     Responsive Behavior
  ----------------------------------------- */

@media (max-width: 30rem) {
    .google-btn {
        width: 39.5rem;
        height: 3rem;
        font-size: 1.6rem;
        font-weight: 600;
        padding: 2.5rem;
        background: #000;
        color: #fff;
        border-radius: 1rem;
        border: none;
    }

    .google-btn__icon svg {
        width: 1.125rem;
        height: 1.125rem;
    }
}
</style>