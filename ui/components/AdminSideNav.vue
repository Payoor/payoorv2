<template>
    <div>
        <div class="adminsidenav">
            <div class="adminsidenav__menu">
                <div v-for="(item, index) in menu" :key="index" :id="`menu-item-${index}`"
                    class="adminsidenav__menu--item">
                    <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                { name: 'Users', path: '/adminui/users' },
                { name: 'Products', path: '/adminui/' },
                { name: 'Orders', path: '/adminui/orders' },
                { name: 'Checkouts', path: '/adminui/checkouts' },
                { name: 'Categories', path: '/adminui/categories' },
                { name: 'Coupons', path: '/adminui/coupons' },
                { name: 'Affiliates', path: '/adminui/card-categories' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.adminsidenav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 20rem;
    border-right: 1px solid rgba($white, .2);

    padding: 3rem;

    &__menu {

        &--item {
            cursor: pointer;
            margin-bottom: 2rem;

            & a {
                text-decoration: none;
                color: $white;
                font-size: 1.2rem;
                transition: all .5s ease;

                &:hover {
                    color: $primary-color;
                }
            }
        }
    }
}
</style>