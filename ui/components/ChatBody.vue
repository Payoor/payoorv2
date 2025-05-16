<template>
    <div>
        <div class="chatbody">
            <div class="chatbody__content">

                <div class="chatbody__products">
                    <div v-for="product in products">
                        <ChatCard :product="product"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jwt_mixin from "@/mixins/jwt_mixin";

export default {
    props: ['products'],
    mixins: [jwt_mixin],
}
</script>

<style lang="scss" scoped>
.chatbody {

    &__content {}

    &__products {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;

        grid-auto-rows: 29rem;

        @include hide-scrollbar;
    }
}
</style>