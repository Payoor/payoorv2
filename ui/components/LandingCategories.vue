<template>
  <div>
    <div class="categories" id="landing-categories">
      <h2 class="categories__header">
        Shop for Food Ingredients and Groceries at the lowest possible prices
      </h2>

      <div class="categories__grid">
        <div class="categories__griditem">
          <figure>
            <img v-lazy="'/imgs/chicken_lap.png'" />
          </figure>
          <h4>Meat and Frozen Food</h4>
        </div>

        <div class="categories__griditem">
          <figure>
            <img v-lazy="'/imgs/chai_seed.jpeg'" />
          </figure>
          <h4>Soups and Stews</h4>
        </div>

        <div class="categories__griditem">
          <figure>
            <img v-lazy="'/imgs/bournvita.jpeg'" />
          </figure>
          <h4>Beverages</h4>
        </div>

        <div class="categories__griditem">
          <figure>
            <img v-lazy="'/imgs/fruits.png'" />
          </figure>
          <h4>Fruits</h4>
        </div>

        <div class="categories__griditem">
          <figure>
            <img v-lazy="'/imgs/fruit_basket.jpeg'" />
          </figure>
          <h4>Farmers market</h4>
        </div>

        <div class="categories__griditem">
          <figure>
            <img v-lazy="'/imgs/pepper_container.png'" />
          </figure>
          <h4>Spices and packaged foods</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.categories {
  @include section;

  @include section-header;

  &__grids {
    background: $faint-primary-color;
    border-radius: 1rem;

    @include respond(tab-land) {
      margin-bottom: 6rem;
    }
  }

  &__grid {
    display: grid;
    padding: 4rem;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 9rem;

    @include respond(tab-port) {
      display: grid;
      padding: 2rem;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }

    &:nth-child(1) {
      padding-bottom: 1.5rem;
    }

    &:nth-child(2) {}
  }

  &__griditem {
    & figure {
      width: 100%;
      height: 27rem;

      @include respond(tab-port) {
        height: 18rem;
      }

      & img {
        height: 100%;
        width: 100%;
        border-radius: 1rem;
        object-fit: cover;
      }
    }

    & h4 {
      font-size: 1.5rem;
      font-weight: 300;
      font-size: 1.4rem;
      margin-top: 2rem;
      text-align: center;
    }
  }
}
</style>
