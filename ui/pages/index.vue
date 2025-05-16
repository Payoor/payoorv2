<template>
    <div>
        <div v-if="!jwt">
            <div class="home__header" :class="{ 'unauth': !jwt }">
                <ChatHeader :logovisible="false" :jwt="jwt" />
            </div>

            <div>
                <Authenticator @update:authValue="handleAuthChange" />
            </div>
        </div>

        <div v-if="jwt">
            <div class="home">
                <div class="home__header">
                    <ChatHeader :logovisible="true" :jwt="jwt" />
                </div>

                <div class="home__chatbody">
                    <ChatBody :jwt="jwt" :products="products" />
                </div>

                <div class="home__bottom">
                    <CartButton :showicon="true" />

                    <ChatCategories :jwt="jwt" @update:products="handleProductsChange" />

                    <ChatInput :jwt="jwt" @update:products="handleProductsChange" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jwt: null,
            products: []
        }
    },
    mounted() {
        this.jwt = localStorage.getItem('jwt');
    },
    methods: {
        handleAuthChange(value) {
            this.jwt = value;
            localStorage.setItem('jwt', value);
        },
        handleProductsChange(value) {
            this.products = value;
        }
    }
}
</script>

<style lang="scss">
.home {
    position: relative;
    height: 100vh;
    overflow: hidden;

    &__header {
        @include fixed-header;
    }

    &__chatbody {
        padding: 3rem;

        height: 100vh;
        background: $white;
        overflow: hidden;
        overflow-y: scroll;

        @include respond(phone) {
            padding: 1rem;
            padding-top: 7rem;


            padding-bottom: 30rem;
        }


        //padding-bottom: 40rem;
    }

    &__bottom {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        padding: 3rem;

        z-index: 4;
        background: $white;

        @include respond(phone) {
            padding: 1rem;
        }
    }
}
</style>