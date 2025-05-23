<template>
    <div>
        <div class="chatbody">
            <div class="chatbody__content">

                <div>
                    <div v-if="searchloading" class="chatbody__loading">
                        <div class="spinner"></div>
                    </div>

                    <div v-else class="chatbody__products">
                        <div v-for="product in products" :key="product._id">
                            <ChatCard :product="product" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import jwt_mixin from "@/mixins/jwt_mixin";

export default {
    props: ['products', 'searchloading'],
    mixins: [jwt_mixin],
}
</script>

<style lang="scss" scoped>
.chatbody {

    &__content {
        display: flex;
        justify-content: center;

        @include respond(tab-port) {
            display: block;
        }
    }

    &__products {

        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        gap: 2rem;
        grid-auto-rows: 29rem;
        scrollbar-width: none;

        @include hide-scrollbar;

        display: grid;

        width: 82rem;


        @include respond(tab-port) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;

            grid-auto-rows: 29rem;
            width: auto;

        }
    }

    &__loading {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5rem 0;
        grid-column: 1 / -1; // Span full width in grid
    }
}
</style>