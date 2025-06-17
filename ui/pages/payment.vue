<template>
    <div>
        <div class="payment">
            <div class="payment__header">
                <ChatHeader :name="'Payment Options'" :logovisible="false" :jwt="true" />
            </div>

            <ChoosePaymentProcessor />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.payment {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: #f9f9f9;

    &__header {
        @include fixed-header;

        background: $white;
    }

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