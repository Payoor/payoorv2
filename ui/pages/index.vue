<template>
    <div>
        <div v-if="!jwt">
            <div class="home__header" :class="{ 'unauth': !jwt }">
                <ChatHeader :logovisible="true" :jwt="jwt" :green="true" @update:authValue="handleAuthChange" />
            </div>

            <div>
                <Landing>
                    <template #top-left>
                        <Authenticator @update:authValue="handleAuthChange" />
                    </template>
                </Landing>
            </div>
        </div>

        <div v-if="jwt">
            <div class="home">
                <div class="home__content">
                    <div class="home__header" :class="{ 'auth': jwt }">
                        <ChatHeader :logovisible="true" :jwt="jwt" @update:authValue="handleAuthChange" />
                    </div>

                    <div class="home__chatbody">
                        <ChatBody :jwt="jwt" :products="products" :searchloading="loading" />
                    </div>

                    <div class="home__bottom">
                        <div>
                            <div class="home__bottom--cart">
                                <CartButton :showicon="true" />
                            </div>

                            <ChatCategories :jwt="jwt" @update:products="handleProductsChange"
                                :setLoading="setLoading" />

                            <ChatInput :jwt="jwt" @update:products="handleProductsChange" :setLoading="setLoading" />
                        </div>
                    </div>
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
            products: [],
            loading: false
        }
    },
    async mounted() {
        this.jwt = localStorage.getItem('jwt');
    },
    methods: {
        handleAuthChange(value) {
            if (value) {
                this.jwt = value;
                localStorage.setItem('jwt', value);
            } else {
                this.jwt = null;
                console.log('logged out here');
            }
        },
        handleProductsChange(value) {
            this.products = value;
        },
        setLoading(value) {
            this.loading = value;
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

        padding-bottom: 30rem;

        @include respond(tab-port) {
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

        z-index: 5;
        background: $white;

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

    &__content {
        position: relative;

        //width: 80rem;
        overflow: hidden;

        @include respond(tab-port) {
            //width: auto;
        }
    }
}
</style>