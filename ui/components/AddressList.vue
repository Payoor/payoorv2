<template>
    <div class="addresslist">
        <div class="addresslist__content">
            <div v-if="loading" class="addresslist__loading">
                <LoadingAnimation /> Searching for places...
            </div>

            <div class="addresslist__item" v-for="{ formatted_address, icon } in addressesList" :key="formatted_address"
                @click="selectAddressFromList(formatted_address, checkout_input)">
                <figure class="addresslist__icon">
                    <img :src="icon" alt="Location Icon" />
                </figure>
                <span class="addresslist__text">{{ formatted_address }}</span>
            </div>
        </div>
    </div>
</template>




<script>
import { serverurl } from '@/api';
import debounce from 'lodash/debounce';

export default {
    props: ['query', 'selectAddressFromList', 'checkout_input'],
    data() {
        return {
            addressesList: [],
            debouncedQueryAddressList: null,
            loading: false
        };
    },
    watch: {
        query(newQuery) {
            this.debouncedQueryAddressList(newQuery);
        }
    },
    created() {
        // Create a debounced version of the fetch method
        this.debouncedQueryAddressList = debounce(this.queryAddressList, 500);
    },
    methods: {
        async queryAddressList(query) {
            if (!query || !query.length) return;

            this.loading = true;

            try {
                const validToken = localStorage.getItem('jwt');
                if (!validToken) return;

                const response = await fetch(
                    `${serverurl}/shopper/google/search-places?query=${encodeURIComponent(query)}`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${validToken}`,
                            'Content-Type': 'application/json',
                            'Origin': window.location.origin,
                            'Access-Control-Request-Method': 'POST',
                            'Access-Control-Request-Headers': 'Content-Type'
                        }
                    }
                );

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error performing autocomplete:', errorData);
                    return;
                }

                const data = await response.json();
                this.addressesList = data.data.placesResponse || [];
            } catch (error) {
                console.error('Autocomplete error:', error);
            } finally {
                this.loading = false;
            }
        }

    }
};
</script>


<style lang="scss" scoped>
.addresslist {
    &__content {
        background: #f7f7f7;
        padding: 1rem;
        border-radius: 1rem;
        max-width: 60rem;
        margin: 0 auto;
        height: 58rem;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
    }

    &__loading {
        text-align: center;
        font-size: 1.4rem;
        color: $primary-color;
        margin: 2rem 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid $primary-color;
            border-radius: 50%;
            width: 2rem;
            height: 2rem;
            animation: spin 0.8s linear infinite;
            margin-right: 1rem;
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    &__item {
        display: flex;
        align-items: center;
        background: #fff;
        border: 1px solid #ddd;
        padding: 1rem;
        border-radius: 1rem;
        margin-bottom: 1rem;
        transition: background 0.2s ease;

        &:hover {
            background: #f0f0f0;
        }
    }

    &__icon {
        width: 1.3rem;
        height: 1.3rem;
        margin-right: 1.5rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__text {
        font-size: 1.4rem;
        color: #333;
        line-height: 1.5;
        word-break: break-word;
    }
}
</style>
