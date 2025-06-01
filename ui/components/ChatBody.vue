<template>
    <div>
        <div class="chatbody">
            <div class="chatbody__content" ref="scrollContainer">
                <div>
                    <div v-if="searchloading" class="chatbody__loading">
                        <LoadingAnimation />
                    </div>

                    <div v-if="currentUser.email">
                        <div class="chatbody__products"
                            v-if="currentUser.phoneNumber && currentUser.name && currentUser.detailsAdded">
                            <div v-for="(product, index) in products" :key="product._id"
                                :ref="setLastProductRef(index)">
                                <ChatCard :product="product" />
                            </div>
                        </div>

                        <div v-if="!currentUser.detailsAdded">
                            <div class="chatbody__products user-details"
                                v-if="!currentUser.phoneNumber || !currentUser.name || !currentUser.detailsAdded">
                                <div class="chatbody__userdetails">
                                    <p class="chatbody__userdetails--ai">Please add your phone number...</p>

                                    <div class="chatbody__userdetails--prompt">
                                        <span></span>
                                        <span class="content" v-if="tempPhoneNumber.length">{{ tempPhoneNumber }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="chatbody__products user-details"
                                v-if="!currentUser.name && currentUser.phoneNumber || !currentUser.detailsAdded && currentUser.name">
                                <div class="chatbody__userdetails">
                                    <p class="chatbody__userdetails--ai">Please add your name...</p>

                                    <div class="chatbody__userdetails--prompt">
                                        <span></span>
                                        <span class="content" v-if="tempUserName.length">{{ tempUserName }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="" v-if="globalLoading">
                                <LoadingAnimation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapState } from "vuex";

import jwt_mixin from "@/mixins/jwt_mixin";

export default {
    props: ['products', 'searchloading'],
    emits: ['load-more'],
    mixins: [jwt_mixin],
    data() {
        return {
            observer: null,
        };
    },
    computed: {
        ...mapState("user", {
            currentUser: (state) => state.currentUser,
            tempUserName: (state) => state.currentUser.name ? state.currentUser.name : "",
            tempPhoneNumber: (state) => state.currentUser.phoneNumber ? state.currentUser.phoneNumber : "",
            globalLoading: (state) => state.loading
        }),
    },
    methods: {
        setLastProductRef(index) {
            return index === this.products.length - 1 ? 'lastProduct' : null;
        },
        observeLastElement() {
            if (this.observer) {
                this.observer.disconnect();
            }

            this.$nextTick(() => {
                const lastEl = this.$refs.lastProduct;

                const target = Array.isArray(lastEl) ? lastEl[0] : lastEl;

                //console.log(target)

                if (!(target instanceof Element)) {
                    return;
                }

                this.observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting && !this.searchloading) {
                            this.$emit('load-more');
                            //console.log('Approaching last element — loading more');
                        }
                    },
                    {
                        root: null,
                        rootMargin: '200px',
                        threshold: 0,
                    }
                );

                this.observer.observe(target);

            });
        }
    },
    watch: {
        products() {
            this.observeLastElement();
        }
    },
    mounted() {
        this.observeLastElement();
    },
    beforeDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
};

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

        &.user-details {
            grid-auto-rows: 10rem;
        }
    }

    &__userdetails {
        grid-column: 1 / -1;

        font-size: 1.7rem;

        padding-top: 4rem;

        &--ai {
            color: $primary-color;
            font-weight: 500;

            animation: slideFadeInUp 0.3s ease-out forwards;
        }

        &--prompt {
            color: $black;
            display: flex;
            justify-content: space-between;

            & span {

                &.content {
                    background: $primary-color;
                    color: $white;
                    padding: 1rem;
                    border-radius: 3rem;
                    font-weight: 400;

                    animation: slideFadeInUp 0.3s ease-out forwards;
                }
            }
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