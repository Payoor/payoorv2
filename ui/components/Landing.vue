<template>
    <div class="landing">

        <div>
            <div class="landing__top">
                <div class="landing__topleft">
                    <div class="landing__topleft--auth">
                        <slot name="top-left"></slot>
                    </div>
                </div>

                <div class="landing__topright">
                    <figure class="landing__topright--img">
                        <img src="@/assets/imgs/bike-desktop.png" />
                    </figure>
                </div>

                <div class="landing__seemore">
                    <button class="landing__seemore--btn floating-element" @click="scrollDown('landing-categories')">Learn more</button>
                </div>
            </div>
        </div>

        <div class="landing__content">
            <LandingCategories />

            <LandingCopy />

            <LandingFaq />

            <LandingFooter />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        scrollDown(elementId, duration = 1000, offset = 0) {
            const targetElement = document.getElementById(elementId);

            if (!targetElement) {
                console.error(`Element with ID "${elementId}" not found`);
                return false;
            }

            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

            const startPosition = window.scrollY;

            const distance = targetPosition - startPosition;

            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);

                const easeInOutQuad = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

                window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);
            return true;
        }
    }
}
</script>

<style lang="scss" scoped>
.landing {
    overflow-x: hidden;

    &__top {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;

        @include respond(tab-port) {
            display: flex;
        }
    }

    &__topleft {

        display: flex;
        justify-content: center;

        @include respond(tab-port) {
            width: 100%;
            display: block;
        }

        &--auth {
            padding: 0 10rem;
            width: 100rem;

            @include respond(tab-port) {
                padding: 0;
                width: auto;
            }
        }
    }

    &__topright {
        display: flex;
        justify-content: center;
        align-items: center;

        &--img {
            display: flex;
            justify-content: center;
            align-items: center;
            //height: 100rem;
            width: 100rem;
            transform: scale(1.1);


            & img {
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }

        @include respond(tab-port) {
            display: none;
        }
    }

    &__content {
        position: relative;
        margin-top: 100vh;
        background: $primary-color;
    }

    &__seemore {
        position: absolute;
        bottom: 10rem;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;

        & button {
            border: 1px solid #fff;
            border-radius: 3rem;
            padding: 1rem 4rem;
            color: #fff;
            background: transparent;

            cursor: pointer;
            font-weight: 600;
            font-size: 1.4rem;
        }
    }
}
</style>