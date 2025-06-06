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

                    <div class="home__chatbody" ref="chatBodyRef">
                        <ChatBody :jwt="jwtToken" :products="products" :searchloading="loading"
                            @load-more="loadMoreProducts" />
                    </div>

                    <div class="home__bottom" ref="homeBottom" :style="bottomTranslateStyle">
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
// Import your components. Make sure paths are correct.

export default {
    data() {
        return {
            jwt: null,
            products: [],
            loading: false,
            page: 2,
            noMoreProducts: false,
            naturalLangResponseText: "",
            lastScrollTop: 0,
            isBottomHidden: false, // New state to control bottom bar visibility
            translateAmount: 120, // **Adjust this value based on the actual height of your .home__bottom**
            // A safe starting point is the full height of the element when visible.
            // You can inspect it in your browser's dev tools.
        };
    },
    mounted() {
        this.updateNaturalLangResponse();
        this.addScrollListener();
    },
    beforeUnmount() {
        this.removeScrollListener();
    },
    computed: {
        ...mapState("user", {
            currentUser: (state) => state.currentUser,
            isLoading: (state) => state.loading,
            jwtToken: (state) => state.jwtToken,
            globalLoading: (state) => state.loading,
        }),
        cleanedUserName() {
            if (!this.currentUser?.name) return "";
            return this.currentUser.name.split(" ")[0].replace(/\s+/g, "");
        },
        // New computed property for dynamic styling
        bottomTranslateStyle() {
            return {
                transform: this.isBottomHidden ? `translateY(${this.translateAmount}px)` : 'translateY(0)',
                transition: 'transform 0.3s ease-out', // Smooth animation for movement
            };
        },
    },
    watch: {
        currentUser(newVal) {
            this.updateNaturalLangResponse();
        },
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
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ message }),
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
        },

        handleScroll() { // Event is often not needed if you're just accessing `scrollTop`
            const chatBody = this.$refs.chatBodyRef;

            if (chatBody) {
                const currentScrollTop = chatBody.scrollTop;
                const scrollThreshold = 10; // Pixels to scroll before changing state

                // Only react to significant scroll changes
                if (Math.abs(currentScrollTop - this.lastScrollTop) > scrollThreshold) {
                    if (currentScrollTop > this.lastScrollTop) {
                        // Scrolling downwards
                        console.log('Scrolling Downwards - Hiding bottom');
                        this.isBottomHidden = true; // Hide the bottom bar
                        // Optional: You could still trigger loadMoreProducts here if needed
                        // if (currentScrollTop + chatBody.clientHeight >= chatBody.scrollHeight - 50) {
                        //   this.loadMoreProducts();
                        // }
                    } else if (currentScrollTop < this.lastScrollTop) {
                        // Scrolling upwards
                        console.log('Scrolling Upwards - Showing bottom');
                        this.isBottomHidden = false; // Show the bottom bar
                    }
                }

                this.lastScrollTop = currentScrollTop;
            }
        },

        addScrollListener() {
            const chatBody = this.$refs.chatBodyRef;
            if (chatBody) {
                chatBody.addEventListener('scroll', this.handleScroll);
            }
        },
        removeScrollListener() {
            const chatBody = this.$refs.chatBodyRef;
            if (chatBody) {
                chatBody.removeEventListener('scroll', this.handleScroll);
            }
        },
    },
};
</script>

<style lang="scss">
.home {
    position: relative;
    height: 100vh;
    overflow: hidden;
    /* Ensures elements outside don't cause scrollbars */

    &__header {
        @include fixed-header;
        /* Adjust for initial header height if needed */
    }

    &__chatbody {
        padding: 3rem;
        /* Adjust height to account for header and dynamic bottom bar */
        /* Example: 100vh - (header_height + initial_bottom_height) */
        /* Let's estimate initial bottom height at ~100px for a total of ~160px from top/bottom */
        height: calc(100vh - 160px);
        /* This will need fine-tuning based on your actual header/bottom heights */
        padding-top: 9rem;
        /* Account for header */
        background: $white;
        overflow-y: scroll;
        /* The padding-bottom should be enough to reveal content under the bottom bar initially,
         and then more when the bottom bar slides away. */
        padding-bottom: 120px;
        /* Adjust this to at least the height of your .home__bottom when visible */

        @include respond(tab-port) {
            padding: 1rem;
            padding-top: 2rem;
            padding-bottom: 120px;
            /* Adjust for mobile, often similar to desktop height */
        }
    }

    &__naturallanguage {
        padding: 2rem;
        padding-top: 9rem;
        /* Pushes content down below the fixed header */
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
        /* Keep it fixed relative to the viewport */
        bottom: 0;
        left: 0;
        width: 100vw;
        padding: 3rem;
        z-index: 5;
        background: $white;
        display: flex;
        justify-content: center;
        padding-bottom: 0.4rem;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        /* Adds a subtle shadow */

        /* The transform and transition properties are now managed by `bottomTranslateStyle` */
        /* Remove any direct `transform` or `transition` here to avoid conflicts */

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
        /* Helps contain the layout */
    }
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}
</style>