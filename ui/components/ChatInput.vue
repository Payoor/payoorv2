<template>
    <div>
        <div class="chatinput">
            <textarea v-model="userinput" class="chatinput__field" :placeholder="placeholder" @input="autoResize"
                @keydown.enter="handleEnter" ref="textarea" v-if="currentUser.name && currentUser.phoneNumber && currentUser.detailsAdded">
</textarea>

            <input v-model="userinput" class="chatinput__field" type="tel" :placeholder="placeholder"
                v-if="isPhoneMode" />

            <input v-model="userinput" class="chatinput__field" type="text" :placeholder="placeholder"
                v-if="isNameMode" />


            <div class="chatinput__sendbtn slide-fade-in-up" :class="{
                'visible': userinput.length
            }" @click.stop="sendMessage">
                <button>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="icon-2xl">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z"
                            fill="currentColor"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>


<script>
import { mapState } from "vuex";

import { serverurl } from '@/api';
import jwt_mixin from "@/mixins/jwt_mixin";
import product_mixin from "@/mixins/product_mixin";

export default {
    mixins: [jwt_mixin, product_mixin],
    data() {
        return {
            userinput: "",
            //placeholder: "Enter your list",
        };
    },
    watch: {
        userinput(newValue) {
            const wordArray = newValue.trim().split(/\s+/); // split by spaces
            const wordCount = wordArray.length;

            //  console.log(wordArray, wordCount)

            if (wordCount >= 1) {
                if (wordCount >= 5 || wordArray[0].length >= 5) {
                    // console.log('hello wordcound')
                    //this.autoComplete(newValue);
                }
            }
        }
    },
    computed: {
        ...mapState("user", {
            currentUser: (state) => state.currentUser
        }),
        placeholder() {
            if (!this.currentUser.phoneNumber) {
                return "Please add your phone number...";
            }

            if (this.currentUser.phoneNumber && !this.currentUser.name) {
                return "Please add your name...";
            }

            return "Enter your list";
        },
        isPhoneMode() {
            return !this.currentUser.phoneNumber;
        },
        isNameMode() {
            return !this.currentUser.name && this.currentUser.phoneNumber;
        }
    },
    mounted() {
        const message = this.$route.query.message;

        if (message) {
            this.postMessageFromQuery(message);
        }
    },
    methods: {
        autoResize() {
            this.$nextTick(() => {
                const textarea = this.$refs.textarea;
                textarea.style.height = "auto";
                textarea.style.height = `${textarea.scrollHeight}px`;
            });
        },
        async autoComplete(queryText) {
            try {
                const token = await this.getValidToken();

                const response = await fetch(`${serverurl}/shopper/message/suggest?query=${queryText}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Origin': window.location.origin,
                        'Access-Control-Request-Method': 'POST',
                        'Access-Control-Request-Headers': 'Content-Type'
                    }
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error performing autocomplete:', errorData);
                    return;
                }

                const data = await response.json();
                // console.log('Autocomplete response:', data);
            } catch (error) {
                console.error('Error performing autocomplete:', error.message);
            }
        },
        sendMessage() {
            const { userinput } = this;

            if (userinput) {

                if (this.isPhoneMode) {
                    this.$store.dispatch('user/setUserPhoneNumber', userinput);
                    this.userinput = "";
                    return;
                }

                if (this.isNameMode) {
                    this.$store.dispatch('user/setUserName', userinput);
                    this.userinput = "";
                    return;
                }

                if (userinput.length) {
                    this.$emit("update:products", []);
                    this.postMessageToServer();
                }
            }
        },
        handleEnter(e) {
            const width = window.innerWidth;

            if (width > 900) {
                e.preventDefault();
                this.sendMessage();
            }
        },
        async postMessageToServer() {
            const token = await this.getValidToken();
            if (this.setLoading) this.setLoading(true); // start loading

            try {
                const response = await fetch(`${serverurl}/shopper/message`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Origin': window.location.origin,
                        'Access-Control-Request-Method': 'POST',
                        'Access-Control-Request-Headers': 'Content-Type'
                    },
                    body: JSON.stringify({ message: this.userinput })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                if (response.status === 200 || response.status === 201) {
                    const data = await response.json();
                    const { products } = data;

                    this.$emit("update:products", [...this.products, ...products]);

                    this.$router.replace({
                        path: this.$route.path,
                        query: {
                            ...this.$route.query,
                            message: this.userinput
                        }
                    });

                    this.userinput = "";
                    this.$nextTick(() => this.autoResize());
                }
            } catch (error) {
                console.log(error);
            } finally {
                if (this.setLoading) this.setLoading(false); // end loading
            }
        },
        async postMessageFromQuery(message) {
            const token = await this.getValidToken();
            if (this.setLoading) this.setLoading(true);

            try {
                const response = await fetch(`${serverurl}/shopper/message`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Origin': window.location.origin,
                        'Access-Control-Request-Method': 'POST',
                        'Access-Control-Request-Headers': 'Content-Type'
                    },
                    body: JSON.stringify({ message })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                if (response.status === 200 || response.status === 201) {
                    const data = await response.json();
                    const { products } = data;

                    this.$emit("update:products", [...this.products, ...products]);
                }
            } catch (error) {
                console.log(error);
            } finally {
                if (this.setLoading) this.setLoading(false);
            }
        }

    }
};
</script>

<style lang="scss" scoped>
.chatinput {
    position: relative;

    margin: 0 auto;
    border: 0.3rem solid transparent;
    background: #333333;
    overflow: hidden;
    padding: 2rem;
    min-height: 6rem;

    border-radius: 3rem;

    @include respond(tab-port) {
        border-radius: 3rem 3rem 0rem 0rem;
    }

    &__field {
        border: none;
        outline: none;
        width: 100%;
        min-height: 2rem; // More substantial default height
        max-height: 15rem;
        resize: none;
        overflow-y: auto;
        color: $white;
        background: transparent;
        line-height: 1.5;

        font-size: 2.1rem;
    }

    &__sendbtn {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        height: 4.5rem;
        width: 4.5rem;
        display: flex;
        justify-content: center;
        border-radius: 100%;
        overflow: hidden;
        background: $primary-color;

        display: none;

        &.visible {
            display: flex;
        }

        & button {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            background: transparent;
            cursor: pointer;
            border: none;
            outline: none;

            & svg {
                fill: $white;
                color: $white;
                height: 4rem;
                width: 4rem;
            }
        }
    }
}
</style>
