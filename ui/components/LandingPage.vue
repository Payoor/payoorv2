<template>
    <div>
        <div class="landing">
            <div class="landing__greeting">
                <div class="landing__header unauth">
                    <ChatHeader :logovisible="true" :green="true" />
                </div>

                <div class="landing__vharea">
                    <h1 class="landing__h1">
                        <div class="landing__h1--section">
                            <span>Hi,</span>
                        </div>
                        <div class="landing__h1--section">
                            <span>I'm </span>
                        </div>
                        <div class="landing__h1--section">
                            <span>Payoor</span>
                            <span class="line grow-bar">
                                <img src="/imgs/9b0498221204fb302eeee0e4809573e18a95723b.png" />
                            </span>
                        </div>
                    </h1>

                    <h2 class="landing__h2">
                        <span>Make A Grocery List & Leave</span>
                        <span>The Rest to me</span>
                    </h2>

                    <div class="landing__inputboxarea">
                        <div class="landing__inputbox">
                            <textarea class="landing__inputbox--input" placeholder="Create a list" v-model="userInput"
                                @keydown.enter="handleEnter"></textarea>

                            <div class="landing__inputbox--buttonarea">
                                <button class="landing__inputbox--button"
                                    :class="{ 'disabled-btn': userInput.length === 0 }" @click="getStarted"
                                    :disabled="userInput.length === 0">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="landing__animation mobile">
                        <div class="landing__animation--content">
                            <figure class="hand-receiver">
                                <img src="/svg/handreceiver.svg" />
                            </figure>

                            <figure class="hand-giver">
                                <img src="/svg/handgiver.svg" />
                            </figure>
                        </div>
                    </div>

                </div>

                <div class="landing__greencloud">
                    <div class="landing__learnmore">
                        <button class="landing__learnmore--btn" @click="scrollToTop">Learn more</button>
                    </div>
                    <figure class="mobile">
                        <img src="/svg/greencloud.svg" />
                    </figure>
                </div>
            </div>

            <div class="landing__content" id="landing-content">
                <LandingCategories />

                <LandingCopy />

                <LandingFaq />

                <LandingFooter />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            userInput: ""
        };
    },
    methods: {
        async getStarted() {
            if (this.userInput.length > 0) {
                this.$router.push({
                    path: '/authp',
                    query: {
                        ...this.$route.query,
                        message: this.userInput
                    }
                });
            }
        },
        scrollToTop() {
            const landingContent = document.getElementById('landing-content');
            landingContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        },
        handleEnter(e) {
            const width = window.innerWidth;

            if (width > 900) {
                e.preventDefault();
                this.sendMessage();
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.landing {
    position: relative;
    //height: 100vh;
    overflow: hidden;
    //background: $sky-blue-3;
    //min-height: 200vh; //development

    &__header {
        @include fixed-header;
    }

    &__h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        animation: fadeIn 1s ease-out forwards;

        &--section {
            position: relative;

            & span {
                display: inline-block;
                margin-right: 1rem;

                &.line {
                    position: absolute;
                    left: 0;
                    bottom: -1rem;
                    width: 0;
                    margin: 0;
                    animation: growLine 1s ease-out 1s forwards;

                    & img {
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        @keyframes growLine {
            0% {
                width: 0;
            }

            100% {
                width: 11rem;
            }
        }
    }

    &__h2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 300;
        font-size: 1.6rem;
        animation: fadeIn 1s ease-out forwards;

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }
    }



    &__vharea {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;

        z-index: 3;
        padding-top: 11rem;
    }

    &__animation {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 4;

        &.mobile {
            display: none;

            @include respond(tab-port) {
                display: flex;
            }
        }

        &--content {
            position: relative;
            width: 100%;
            transform: scale(1.2);
        }

        & figure {
            position: absolute;
            left: 0;
            height: auto;

            &.hand-receiver {
                z-index: 2;
                animation: slideInFromLeft 1s ease-out forwards;
                animation-delay: 0.3s;
                transform: translateX(-100%);
            }

            &.hand-giver {
                z-index: 1;
                animation: slideInFromRight 1s ease-out forwards;
                transform: translateX(100%);
            }

            & img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }

            @keyframes slideInFromLeft {
                0% {
                    transform: translateX(-100%);
                }

                100% {
                    transform: translateX(0);
                }
            }

            @keyframes slideInFromRight {
                0% {
                    transform: translateX(100%);
                }

                100% {
                    transform: translateX(0);
                }
            }
        }

    }

    &__greeting {
        height: 100vh;
        position: fixed;
        top: 0;
        width: 100vw;
        left: 0;
        background: $sky-blue-3;
    }

    &__greencloud {
        position: fixed;
        bottom: -20rem;
        left: 0;
        width: 100vw;
        height: 20rem;
        z-index: 4;
        animation: slideInFromBottom 1s ease-out forwards;

        & figure {
            &.mobile {
                display: none;

                @include respond(tab-port) {
                    display: block;
                }
            }
        }



        & img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        @keyframes slideInFromBottom {
            0% {
                bottom: -20rem;
            }

            100% {
                bottom: 0;
            }
        }
    }


    &__inputboxarea {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        animation: fadeInFromTop 1s ease-out forwards;

        @keyframes fadeInFromTop {
            0% {
                opacity: 0;
                transform: translateY(-50px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }

    &__inputbox {
        position: relative;
        border: 1px solid $primary-color;
        overflow: hidden;
        width: 40rem;
        height: 16.2rem;
        border-radius: 2rem;
        padding: 1.5rem 0;
        background: $white;

        &--input {
            position: absolute;
            border-radius: 1rem;
            width: 100%;
            height: 59%;
            border: none;
            outline: none;
            background: $white;
            resize: none;
            font-size: 1.6rem;
            padding: 1rem 2rem;
            min-height: 5.4em;
            max-height: 10.8em;
            overflow-y: auto;
            line-height: 1.8em;
            top: 1rem;
        }

        &--buttonarea {
            position: relative;
            padding: 1rem;
            position: absolute;
            bottom: 0;
            width: 100%;
        }

        &--button {
            width: 100%;
            border-radius: 3rem;
            background: $primary-color;
            color: #ffffff;
            text-align: center;
            border: none;
            outline: none;
            font-weight: 600;
            font-size: 1.9rem;
            padding: 1.5rem 2rem;
        }
    }

    &__learnmore {
        position: absolute;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        top: 13rem;

        &--btn {
            border: 1px solid $white;
            background: transparent;
            outline: none;
            border-radius: 3rem;
            color: $white;
            cursor: pointer;
            padding: 1rem 4rem;
        }
    }

}
</style>