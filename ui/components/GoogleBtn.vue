<template>
    <div class="google-btn">
        <button id="login-with-google" class="google-login-btn">
            Continue with Google
        </button>
    </div>
</template>

<script>
export default {
    name: "GoogleLoginButton",
};
</script>

<style scoped lang="scss">
.google-btn {
    display: flex;
    justify-content: center;

    @media screen and (max-width: 720px) {
        margin-bottom: 16px;
    }
}

.google-login-btn {
    background-color: #ffffff;
    border: 1px solid #dadce0;
    color: #3c4043;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.2s;

    &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &::before {
        content: '';
        display: inline-block;
        background: url('https://developers.google.com/identity/images/g-logo.png') no-repeat center;
        background-size: contain;
        width: 18px;
        height: 18px;
    }
}
</style>