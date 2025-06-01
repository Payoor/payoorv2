<template>
    <div class="loading-animation">
        <figure>
            <img src="/imgs/cartlogo.png" />
        </figure>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loading-animation {
    display: flex;
    align-items: center;
    justify-content: center;

    & figure {
        height: 3rem;
        width: 3rem;
        border-radius: 100%;
        overflow: hidden;
        animation: float 1.5s ease-in-out infinite alternate;

        & img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }
}

@keyframes float {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-10px);
    }
}
</style>
