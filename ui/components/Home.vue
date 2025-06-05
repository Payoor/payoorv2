<template>
    <div>
        <div class="home">
            <div class="home__content" v-if="!globalLoading">
                <div class="home__header" :class="{ 'auth': jwtToken }">
                    <ChatHeader :logovisible="true" :jwt="jwtToken" @update:authValue="handleAuthChange" />
                </div>

                <div v-if="currentUser.email && currentUser.name">
                    <div class="home__naturallanguage">
                        <p class="home__naturallanguage--p">{{ naturalLangResponseText }}</p>
                    </div>

                    <div class="home__chatbody">
                        <ChatBody :jwt="jwtToken" :products="products" :searchloading="loading"
                            @load-more="loadMoreProducts" />
                    </div>

                    <div class="home__bottom">
                        <div>
                            <div class="home__bottom--cart">
                                <CartButton :showicon="true" />
                            </div>

                            <ChatCategories :jwt="jwtToken" @update:products="handleProductsChange"
                                @update:replyuser="handleReply" :setLoading="setLoading" :home="true" />

                            <ChatInput :jwt="jwtToken" @update:products="handleProductsChange"
                                @update:replyuser="handleReply" :setLoading="setLoading" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { serverurl } from "@/api";

export default {
    data() {
        return {
            jwt: null,
            products: [],
            loading: false,
            page: 2,
            noMoreProducts: false,
            naturalLangResponseText: ""
        };
    },
    mounted() {
        this.updateNaturalLangResponse();
    },
    computed: {
        ...mapState("user", {
            currentUser: (state) => state.currentUser,
            isLoading: (state) => state.loading,
            jwtToken: (state) => state.jwtToken,
            globalLoading: (state) => state.loading
        }),
        cleanedUserName() {
            if (!this.currentUser?.name) return "";
            return this.currentUser.name.split(" ")[0].replace(/\s+/g, "");
        }
    },
    watch: {
        currentUser(newVal) {
            this.updateNaturalLangResponse()
        }
    },
    methods: {
        async updateNaturalLangResponse() {
            const queryMessage = this.$route.query.message;
            const message = queryMessage
                ? `Here's what I found for "${queryMessage}"`
                : `Hello, ${this.cleanedUserName}, how may I help you with your shopping list?`;

            this.naturalLangResponseText = "";

            if (!queryMessage) {
                this.naturalLangResponseText = message;
                return;
            }

            const chars = message.split("");
            let built = "";

            for (const char of chars) {
                built += char;
                await this.sleep(5); // Typing speed (ms)
                this.naturalLangResponseText = built;
            }
        },

        sleep(ms) {
            return new Promise((resolve) =>
                requestAnimationFrame(() => setTimeout(resolve, ms))
            );
        },

        handleAuthChange(value) {
            if (value) {
                localStorage.setItem("jwt", value);
            } else {
                console.log("logged out here");
            }
        },

        handleProductsChange(value) {
            this.products = value;
            this.page = 2;
            this.noMoreProducts = false;
        },

        handleReply() {
            this.updateNaturalLangResponse();
        },

        setLoading(value) {
            this.loading = value;
        },

        async loadMoreProducts() {
            if (this.loading || this.noMoreProducts) return;

            try {
                const token = this.jwtToken;
                const message = this.$route.query.message;

                if (!message) {
                    console.warn("No search message found in route query.");
                    return;
                }

                const response = await fetch(
                    `${serverurl}/shopper/message?page=${this.page}&size=10`,
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ message })
                    }
                );

                if (!response.ok)
                    throw new Error(`Error loading more: ${response.status}`);

                const data = await response.json();
                const moreProducts = data.products;

                this.products = [...this.products, ...moreProducts];
                this.page += 1;

                if (!data.hasMore) {
                    console.log("No more products to load.");
                    this.noMoreProducts = true;
                }
            } catch (error) {
                console.error("Failed to load more products:", error);
            }
        }
    }
};
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
        overflow-y: scroll;
        padding-bottom: 30rem;

        @include respond(tab-port) {
            padding: 1rem;
            padding-top: 2rem;
            padding-bottom: 40rem;
        }
    }

    &__naturallanguage {
        padding: 2rem;
        padding-top: 9rem;
        padding-bottom: 2rem;
        background: $white;

        display: flex;
        justify-content: center;

        @include respond(tab-port) {
            display: block;
        }

        &--p {
            font-size: 1.6rem;
            font-style: italic;
            font-weight: 300;
            color: $black;

            width: 82rem;

            @include respond(tab-port) {
                width: auto;
            }

            //white-space: pre-wrap;
        }

        &--p::after {
            content: "|";
            animation: blink 1s step-start infinite;
            margin-left: 4px;
            opacity: 0.6;
        }
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
        padding-bottom: 0.4rem;

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
        overflow: hidden;
    }
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}
</style>