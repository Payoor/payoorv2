<template>
    <div>
        <div class="addresseslist">
            <div class="addresseslist__input">
                <input placeholder="Search for an address" v-model="query" />
            </div>

            <div class="addresseslist__button">
                <div>
                    <div class="addresseslist__currentlocation">
                        <span class="addresseslist__currentlocation--btn" @click.stop="getCurrentLocation">
                            <template v-if="!locationLoading">
                                📍 Use Your Current Location
                            </template>
                            <template v-else>
                                <span class="loader"></span> Getting location...
                            </template>
                        </span>
                    </div>
                </div>
                <button class="button-primary" @click="closeAddressList">Done</button>
            </div>

            <div class="addresseslist__content">

                <div v-if="loading" class="addresseslist__loading">
                    <LoadingAnimation /> Searching for places...
                </div>

                <div class="addresseslist__item" v-for="{ formatted_address, icon } in addressesList"
                    :key="formatted_address" @click="selectAddressFromListAndClose(formatted_address)">
                    <figure class="addresseslist__icon">
                        <img :src="icon" alt="Location Icon" />
                    </figure>
                    <span class="addresseslist__text">{{ formatted_address }}</span>
                </div>
                <div v-if="!addressesList.length && !loading && query.length" class="addresseslist__no-results">
                    No results found for "{{ query }}"
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import { handleFetch } from '@/api';
import { mapState, mapActions } from 'vuex';
import debounce from 'lodash/debounce';

export default {
    props: [
        'selectAddressFromList',
        'checkout_input',
        // 'locationLoading',
        'selectAddressFromList',
        'setPlaceholder'
    ],
    data() {
        return {
            addressesList: [],
            debouncedQueryAddressList: null,
            loading: false,
            locationLoading: false,
            query: ""
        };
    },
    computed: {
        ...mapState("addresslist", {
            deliveryAddress: (state) => state.deliveryAddress,
            checkoutInputs: (state) => state.checkoutInputs,
        }),
    },
    watch: {
        query(newQuery) {
            this.debouncedQueryAddressList(newQuery);
        }
    },
    created() {
        this.debouncedQueryAddressList = debounce(this.queryAddressList, 500);
    },
    methods: {
        async queryAddressList(query) {
            if (!query || !query.length) {
                this.addressesList = []; // Clear results if query is empty
                this.loading = false;
                return;
            }

            this.loading = true;

            try {
                const data = await handleFetch({
                    apiroute: 'shopper/google/search-places',
                    queries: { query: encodeURIComponent(query) },
                    method: 'GET'
                });

                this.addressesList = data.data.placesResponse || [];
            } catch (error) {
                console.error('Autocomplete error:', error);
                this.addressesList = []; // Clear results on error
            } finally {
                this.loading = false;
            }
        },
        getCurrentLocation() {
            if (!navigator.geolocation) {
                alert('Geolocation is not supported by your browser');
                return;
            }

            this.locationLoading = true;

            navigator.geolocation.getCurrentPosition(
                async position => {
                    const { latitude, longitude } = position.coords;
                    await this.reverseGeocode({ latitude, longitude });
                    this.locationLoading = false;
                },
                error => {
                    console.error('Geolocation error:', error);
                    alert('Unable to retrieve your location');
                    this.locationLoading = false;
                }
            );
        },
        async reverseGeocode({ latitude, longitude }) {
            try {
                const data = await handleFetch({
                    apiroute: 'shopper/google/use-current-location',
                    queries: { lat: latitude, lng: longitude },
                    method: 'GET'
                });

                const { address, filteredResults } = data.data;
                console.log(address, 'address')
                this.$store.dispatch('addresslist/setAddressDetails', { formatted_address: address, checkout_input: 'delivery_address' });

                //this.selectAddressFromList(address, 'delivery_address');

                //return data.data;
                this.closeAddressList()
            } catch (err) {
                console.error('Reverse geocode error:', err);
                return null;
            }
        },
        async selectAddressFromListAndClose(formatted_address) {
            await this.$store.dispatch('addresslist/setAddressDetails', { formatted_address, checkout_input: 'delivery_address' });
            this.closeAddressList()
        },
        closeAddressList() {
            this.$router.push({
                path: '/checkout',
                query: {
                    ...this.$route.query,
                    deliveryAddress: this.deliveryAddress || '',
                    prevpage: this.$route.path
                }
            });
        },
    }
}
</script>

<style lang="scss" scoped>
.addresseslist {
    background: $white;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;
    padding: 1.5rem;
    // overflow-y: hidden; // This should be handled by addresseslist__content
    overflow-x: hidden;
    display: flex;
    flex-direction: column; // Enable flexbox for vertical alignment

    &__input {
        width: 100%;
        left: 0;
        overflow: hidden;
        position: fixed; // Keep input fixed at the top
        top: 2rem;
        padding: 0 1.5rem;
        background: $white;
        z-index: 8; // Ensure input is above content

        & input {
            outline: none;
            border: none;
            width: 100%;
            font-size: 1.9rem;
            border: 1px solid $primary-color;
            padding: 1.3rem;
            border-radius: .5rem;
            border-radius: 6px;
        }
    }

    &__content {
        flex-grow: 1; // Allow content to take available space
        border-radius: 1rem;
        // margin: 0 auto;
        overflow-y: scroll; // This makes the content scrollable
        display: flex;
        flex-direction: column;
        padding-top: 21rem;
        //padding-bottom: 12rem; // Space for the fixed button area
        -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
        width: 100%;
        padding-bottom: 16rem;
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
        cursor: pointer; // Indicate it's clickable

        &:hover {
            background: #f0f0f0;
        }
    }

    &__icon {
        width: 1.3rem;
        height: 1.3rem;
        margin-right: 1.5rem;
        flex-shrink: 0; // Prevent icon from shrinking

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

    &__no-results {
        text-align: center;
        font-size: 1.4rem;
        color: #666;
        margin-top: 2rem;
    }

    &__button {
        width: 100%;
        left: 0;
        //overflow: hidden;
        position: fixed; // Keep buttons fixed at the bottom
        bottom: 2rem;
        //padding: 0 1.5rem;
        background: $white;
        height: 13rem;
        z-index: 8;
        top: 7rem;
        padding: 1.5rem;

        @include respond(tab-port) {
            display: block; // This seems to be for responsiveness
        }

        & button {
            font-size: 2rem;
            padding: 2rem;
            width: 60rem;
            margin: 0 auto; // Center the button if less than 100% width
            display: block; // Make margin auto work

            @include respond(tab-port) {
                width: 100%;
            }
        }
    }

    &__currentlocation {

        &--btn {
            margin-bottom: 1rem;
            display: inline-block;
            background: transparent;
            color: $primary-color;
            padding: 1rem;
            border: 1px solid $primary-color;
            border-radius: 12px;
            font-size: 1.2rem;
            font-weight: 500;
            position: relative;
            cursor: pointer; // Indicate it's clickable

            .loader {
                border: 2px solid #f3f3f3;
                border-top: 2px solid $primary-color;
                border-radius: 50%;
                width: 1.4rem;
                height: 1.4rem;
                display: inline-block;
                vertical-align: middle;
                margin-right: 0.5rem;
                animation: spin 0.8s linear infinite;
            }
        }
    }
}
</style>