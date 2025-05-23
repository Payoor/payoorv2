<template>
    <div>
        <div class="chatbody">
            <div class="chatbody__content" ref="scrollContainer">
                <div>
                    <div v-if="searchloading" class="chatbody__loading">
                        <div class="spinner"></div>
                    </div>

                    <div v-else class="chatbody__products">
                        <div v-for="(product, index) in products" :key="product._id" :ref="setLastProductRef(index)">
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
    emits: ['load-more'],
    mixins: [jwt_mixin],
    data() {
        return {
            observer: null,
        };
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
                            console.log('Approaching last element — loading more');
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