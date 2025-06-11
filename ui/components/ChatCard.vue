<template>
    <div class="chatcard">
        <figure class="chatcard__img">
            <img v-lazy="imageUrl" />
        </figure>

        <div class="chatcard__contents">
            <div class="chatcard__name">
                <p>{{ name }}</p>
            </div>

            <div class="chatcard__viewmore" @click.stop="viewOptions">
                <button :disabled="loading">
                    <div class="chatcard__viewmore--flex">
                        <span>View {{ options }} options</span>
                        <span v-if="loading" class="spinner"></span>
                    </div>
                </button>
            </div>

            <div class="chatcard__tags">
                <span v-for="(tag, index) in tags" :key="index">{{ formatTag(tag) }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
            default: () => ({})
        }
    },
    data() {
        return {
            loading: false // Introduce a loading state
        }
    },
    mounted() {
        const previousPage = this.$route.query.prevpage;
        const currentProduct = this.$route.query.currentproduct;
    },
    computed: {
        name() {
            return this.product.name || '';
        },
        imageUrl() {
            return this.product.image || 'https://payoorimages.s3.ap-southeast-2.amazonaws.com/products/1739230188359-4hi1261thmy.webp';
        },
        options() {
            return this.product.variantCount || 0;
        },
        tags() {
            return typeof this.product.metadata === 'string'
                ? this.product.metadata.split(' ').map(item => item.trim()).slice(0, 2)
                : (Array.isArray(this.product.metadata) ? this.product.metadata.slice(0, 3) : []);
        },
        productDescription() {
            return this.product.generatedDescription
        }
    },
    methods: {
        async viewOptions() {
            this.loading = true;

            try {
                await this.$store.dispatch("cart/syncCartToServer");
            } catch (error) {
                console.error("Error syncing cart to server:", error);
            } finally {
                this.loading = false;
            }

            this.$router.push({
                path: '/options',
                query: {
                    ...this.$route.query,
                    currentproduct: this.product._mongooseid,
                    productname: this.name
                }
            });
        },
        formatTag(tag) {
            if (tag.length > 6) {
                //return tag.substring(0, 9) + '...';
            }

            return tag;
        },
    }
}
</script>

<style lang="scss" scoped>
.chatcard {
    background: rgba($app-sky-blue, .6);
    border-radius: 1rem;
    overflow: hidden;
    position: relative;

    &__contents {
        padding: 1rem;
    }

    &__name {
        margin: 1rem 0;
        font-size: 1.5rem;
        font-weight: 600;
    }

    &__viewmore {

        &--flex {
            display: flex;
            align-items: center;

            & span {
                flex-shrink: 0;

                &:nth-child(1) {
                    margin-right: .4rem;
                }
            }
        }

        & button {
            outline: none;
            border: none;
            border-radius: 3rem;
            background: $primary-color;
            color: $white;
            font-weight: 500;
            cursor: pointer;
            padding: 1rem;
            font-size: 1.4rem;
            display: flex;
            /* Use flexbox for centering content */
            justify-content: center;
            align-items: center;

            &:disabled {
                opacity: 0.7;
                /* Dim the button when disabled */
                cursor: not-allowed;
            }
        }
    }

    &__img {
        height: 14rem;

        & img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    &__tags {
        display: flex;
        //justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 1rem;

        & span {
            border-radius: 3rem;
            border: 1px solid rgba($primary-color, .4);
            border-radius: 3rem;
            display: inline-block;
            padding: .5rem 1.4rem;

            background: rgba($primary-color, .4);
            font-weight: 500;

            margin-right: .5rem;
        }
    }
}

/* Spinner Animation */
.spinner {
    border: .4rem solid rgba(255, 255, 255, 0.3);
    border-top: .4rem solid #fff;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>