<template>
    <div class="chat-categories__categories">
        <div class="chat-categories__category" v-for="(category, index) in categories" :key="index"
            :class="category.class" @click="searchCategory(index)">
            <div class="chat-categories__category--left">
                <figure class="chat-categories__category--png">
                    <img :src="category.image" alt="Category image" />
                </figure>
            </div>

            <div class="chat-categories__category--right">
                <div class="chat-categories__category--header">
                    <h2>{{ category.name }}</h2>
                </div>
                <div class="chat-categories__category--description">
                    <p>{{ truncate(category.description, 20) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import jwt_mixin from "@/mixins/jwt_mixin";
import product_mixin from "@/mixins/product_mixin";

export default {
    mixins: [jwt_mixin, product_mixin],
    data() {
        return {
            categories: [
                {
                    image: '/imgs/farmfresh.png',
                    name: 'Farm Fresh',
                    description: 'Tomato, Pepper, Onions, Garden-fresh produce straight from the soil.',
                    class: 'farmfresh'
                },
                {
                    image: '/imgs/protein.png',
                    name: 'Protein',
                    description: 'Beef, Chicken, Turkey, and fresh Fish — protein-packed goodness.',
                    class: 'protein'
                },
                {
                    image: '/imgs/cookingessentials.png',
                    name: 'Cooking Essentials',
                    description: 'Salt, Oil, Maggi, Spices — everything you need to bring meals to life.',
                    class: 'cookingessentials'
                },
                {
                    image: '/imgs/fruits.png',
                    name: 'Fruits',
                    description: 'Banana, Apple, Watermelon, Pineapple — sweet, juicy, and healthy.',
                    class: 'fruits'
                }
            ],
            animatedIndices: [] // To track which ones are animated

        };
    },
    methods: {
        truncate(text, maxLength) {
            return text.length > maxLength ? text.substring(0, maxLength).trim() + '...' : text;
        },
        searchCategory(index) {
            const category = this.categories[index];

            this.setMessageAndPost(category.description)
        },
        async setMessageAndPost(value) {
            this.$router.replace({
                path: this.$route.path,
                query: {
                    ...this.$route.query,
                    message: value
                }
            });

            //console.log(value)

            // Post the message to the server
            await this.postMessageFromQuery(value);
        }
    }
};
</script>



<style lang="scss" scoped>
.chat-categories {
    

    &__categories {
        background: $white;
        display: flex;
        justify-content: flex-start;
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        padding: 1rem;
        @include hide-scrollbar;
    }


    &__category {
        border-radius: 1rem;
        width: 20rem;
        flex-shrink: 0;
        min-height: 3rem;
        margin-right: 1rem;
        padding: 1rem;
        cursor: pointer;

        display: flex;
        align-items: center;

        &--header {
            font-size: 1rem;
        }

        &--png {
            height: 5rem;
            width: 5rem;
            margin-right: .5rem;

            & img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        &--description {
            font-size: 1rem;
            color: rgba(#000000, .5)
        }

        &.farmfresh {
            background: #a8d1f0;
        }

        &.protein {
            background: #f0e7a8;
        }

        &.cookingessentials {
            background: #f0baa8;
        }

        &.fruits {
            background: pink;
        }
    }
}
</style>
