<template>
    <div class="addresseslist">
        <div class="addresseslist__header">
            <div class="addresseslist__input">
                <input placeholder="Search for an address" v-model="query" @focus="handleInputFocus"
                    @blur="handleInputBlur" />
            </div>

            <div class="addresseslist__button-area"
                :class="{ 'addresseslist__button-area--keyboard-active': keyboardActive }">
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
                <button class="button-primary" @click="setPlaceholder(false, false, checkout_input)">Done</button>
            </div>
        </div>

        <div class="addresseslist__content">
            <div v-if="loading" class="addresseslist__loading">
                <LoadingAnimation /> Searching for places...
            </div>

            <div class="addresseslist__item" v-for="{ formatted_address, icon } in addressesList"
                :key="formatted_address" @click="selectAddressFromListAndClose(formatted_address, checkout_input)">
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
</template>

<script>
import { handleFetch } from '@/api';
import debounce from 'lodash/debounce';

export default {
    props: [
        'getCurrentLocation',
        'selectAddressFromList',
        'checkout_input',
        'locationLoading',
        'setPlaceholder'
    ],
    data() {
        return {
            addressesList: [],
            debouncedQueryAddressList: null,
            loading: false,
            query: "",
            keyboardActive: false // New state for keyboard visibility
        };
    },
    watch: {
        query(newQuery) {
            this.debouncedQueryAddressList(newQuery);
        }
    },
    created() {
        this.debouncedQueryAddressList = debounce(this.queryAddressList, 500);
    },
    mounted() {
        document.body.style.overflow = 'hidden';
        // Listen for keyboard events (more reliable on some devices/browsers)
        window.visualViewport.addEventListener('resize', this.handleViewportResize);
    },
    beforeUnmount() {
        document.body.style.overflow = '';
        window.visualViewport.removeEventListener('resize', this.handleViewportResize);
    },
    methods: {
        async queryAddressList(query) {
            if (!query || !query.length) {
                this.addressesList = [];
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
                this.addressesList = [];
            } finally {
                this.loading = false;
            }
        },
        selectAddressFromListAndClose(formatted_address, checkout_input) {
            this.selectAddressFromList(formatted_address, checkout_input);
            // Optionally, close the keyboard when an address is selected
            if (document.activeElement) {
                document.activeElement.blur();
            }
        },
        handleInputFocus() {
            // This might not directly mean the keyboard is up, but it's a good indicator
            // The visualViewport resize event is more definitive.
            // this.keyboardActive = true;
        },
        handleInputBlur() {
            // This also doesn't directly mean the keyboard is down.
            // The visualViewport resize event is more definitive.
            // this.keyboardActive = false;
        },
        handleViewportResize() {
            // Determine if the keyboard is active by comparing layout viewport height
            // with visual viewport height.
            // The visual viewport is the currently visible portion of the screen.
            // The layout viewport is the full content area.
            const viewportHeight = window.visualViewport.height;
            const screenHeight = window.innerHeight; // This is the layout viewport height

            // If the visual viewport height is significantly less than the layout viewport height,
            // it's likely the keyboard is open. Adjust the threshold as needed.
            this.keyboardActive = viewportHeight < screenHeight * 0.7; // Example threshold
        }
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
    // padding: 1.5rem; // Removed global padding, now applied per section
    overflow: hidden; // Prevent main wrapper scroll
    display: flex;
    flex-direction: column;

    &__header {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 8;
        background: $white;
        padding: 1.5rem; // Padding for the header area
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Optional: add a subtle shadow
        display: flex;
        flex-direction: column;
        // height will be determined by its content
    }

    &__input {
        width: 100%;
        // No fixed position here anymore, it's inside the fixed header
        padding-bottom: 1.5rem; // Space between input and buttons within header

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

    &__button-area {
        display: flex;
        flex-direction: column;
        align-items: center; // Center items horizontally
        padding-top: 1.5rem; // Space from input
        padding-bottom: 1.5rem; // Space for the bottom

        // When keyboard is active, position this area to float above it
        &--keyboard-active {
            position: absolute; // Change to absolute within the fixed header
            bottom: 0; // Stick to the bottom of the header
            width: calc(100% - 3rem); // Account for header padding (1.5rem left + 1.5rem right)
            background: $white; // Ensure background covers content below
            padding-bottom: 0.5rem; // Reduced padding
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); // Optional: add a subtle shadow
        }

        & button {
            font-size: 2rem;
            padding: 2rem;
            width: 60rem; // Max width for desktop
            margin-top: 1rem; // Space from current location
            display: block;

            @include respond(tab-port) {
                width: 100%;
            }
        }
    }

    &__currentlocation {
        //text-align: center; // Center the current location button
        width: 100%; // Take full width

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
            cursor: pointer;

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

    &__content {
        flex-grow: 1;
        // Adjusted padding-top to account for the dynamic header height
        // This will need to be approximated or dynamically calculated if header height changes significantly
        padding-top: var(--header-height, 150px); // Placeholder, will be set dynamically
        padding-bottom: 1.5rem; // Consistent padding from the bottom
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        padding-left: 1.5rem; // Apply padding here
        padding-right: 1.5rem; // Apply padding here
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
        cursor: pointer;

        &:hover {
            background: #f0f0f0;
        }
    }

    &__icon {
        width: 1.3rem;
        height: 1.3rem;
        margin-right: 1.5rem;
        flex-shrink: 0;

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
}
</style>