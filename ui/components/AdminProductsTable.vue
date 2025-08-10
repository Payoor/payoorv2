<template>
    <div class="markettable">

        <div class="markettable__top" v-if="filters && filters.length > 0">
            <div class="markettable__top--side left">
                <div class="markettable__searchinput">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                        width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path
                            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                        </path>
                    </svg>
                    <input placeholder="Search products" />
                </div>
            </div>
            <div class="markettable__top--side right">
                <div class="markettable__top--pills right">
                    <button v-for="(filter, index) in filters" :key="index" class="markettable__top--button"
                        :class="{ current: currentfilter === filter }" @click="setCurrent(filter)">
                        <span>{{ filter }}</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="markettable__content">
            <div class="markettable__table-wrapper">
                <table class="markettable__table">
                    <thead class="markettable__tableh">
                        <tr>
                            <th v-for="(header, index) in headers" :key="index" :class="header.class">
                                <span>
                                    <span>{{ header.text }}</span>
                                </span>
                            </th>
                        </tr>
                    </thead>

                    <tbody class="markettable__tableb">
                        <tr v-for="(item, itemIndex) in items" :key="itemIndex">
                            <td v-for="(header, headerIndex) in headers" :key="headerIndex" :class="header.class">
                                <div>

                                    <template v-if="header.key === 'actions'">
                                        <div class="markettable__actions">
                                            <!-- The dropdown trigger button -->
                                            <button class="markettable__actions--dropdown-button"
                                                @click.stop="toggleDropdown(item)">
                                                <!-- Three dots icon -->
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-more-horizontal">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </button>

                                            <!-- The dropdown menu -->
                                            <div class="markettable__actions--dropdown"
                                                v-if="dropdownOpenItemId === item._id">
                                                <button @click.stop="$emit('edit-item', item)">View Variants</button>
                                                <button @click.stop="$emit('delete-item', item)">Delete</button>
                                            </div>
                                        </div>
                                    </template>


                                    <template v-else-if="header.key === 'image'">
                                        <figure class="markettable__content--img">
                                            <img width="30" height="30" :src="item.image" :alt="item.name">
                                        </figure>
                                    </template>
                                    <template v-else-if="header.key === 'createdAt' || header.key === 'updatedAt'">
                                        <span>{{ new Date(item[header.key]).toLocaleString() }}</span>
                                    </template>
                                    <template v-else-if="header.key === 'name'">
                                        <span>{{ item[header.key] }}</span>
                                    </template>
                                    <template v-else>
                                        {{ item[header.key] }}
                                    </template>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="markettable__pagination" v-if="hasPagination">
            <button class="markettable__pagination--button" @click="$emit('prev-page')" :disabled="currentPage === 1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 192 512" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z">
                    </path>
                </svg> Prev
            </button>
            <span class="markettable__pagination--info">
                Page <strong class="markettable__pagination--current">{{ currentPage }}</strong> of
                <strong class="markettable__pagination--total">{{ totalPages }}</strong>
            </span>
            <button class="markettable__pagination--button" @click="$emit('next-page')"
                :disabled="currentPage === totalPages">
                Next <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 192 512" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                    </path>
                </svg>
            </button>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        headers: { type: Array, required: true },
        items: { type: Array, required: true },
        filters: { type: Array, default: () => [] },
        hasPagination: { type: Boolean, default: false },
        currentPage: { type: Number, default: 1 },
        totalPages: { type: Number, default: 1 },
    },
    data() {
        return {
            currentfilter: 'All',
            dropdownOpenItemId: null
        }
    },
    methods: {
        setCurrent(filter) {
            this.currentfilter = filter;
        },
        toggleDropdown(item) {
            if (this.dropdownOpenItemId === item._id) {
                this.dropdownOpenItemId = null; // Close if it's already open
            } else {
                this.dropdownOpenItemId = item._id // Open for this item
            }
        },
        // Closes the dropdown when a click occurs outside of it.
        closeDropdown(event) {
            // Check if the click is outside the dropdown container
            if (!this.$el.contains(event.target) || !event.target.closest('.markettable__actions')) {
                this.dropdownOpenItemId = null;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.markettable {
    color: $white;
    font-weight: 500;

    @media (max-width: 480px) {
        overflow: hidden;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem; // Added some space below top section

        @media (max-width: 480px) {
            flex-direction: column;
            align-items: flex-start;
        }

        &--pills {
            display: flex;
            overflow: hidden;

            @media (max-width: 480px) {
                width: 100vw;
                margin-top: 1rem;
                overflow-x: scroll;

                @include hide-scrollbar;
            }
        }

        &--button {
            margin-left: .5rem;
            padding: .5rem 1rem;
            font-size: 1.3rem;
            border-radius: .4rem;

            border: .4px solid #d4d4d4;
            cursor: pointer;
            background: transparent;
            transition: all .5s ease;

            &.current {
                background: rgba(64, 64, 64, .1);
                font-weight: 500;
            }

            &:hover {
                background: rgba(64, 64, 64, .1);
            }

            @media (max-width: 480px) {
                margin-left: 0;
                margin-right: .5rem;
            }
        }
    }

    &__searchinput {
        display: flex; // Added display flex to align icon and input
        align-items: center; // Align items vertically
        background: rgba(64, 64, 64, .1);
        overflow: hidden;
        padding: .5rem;
        border-radius: .5rem;

        @media (max-width: 480px) {
            padding: .6rem;
        }

        __actions & svg {
            height: 1.2rem; // Slightly larger icon
            width: 1.2rem;
            fill: rgba($white, .5);
            color: rgba($white, .5);
            margin-right: .5rem; // Space between icon and input

            @media (max-width: 480px) {
                height: 1.7rem; // Slightly larger icon
                width: 1.7rem;
            }
        }

        & input {
            border: none;
            background: transparent;
            outline: none;
            width: 30rem;
            font-size: 1.2rem; // Match overall font size

            @media (max-width: 480px) {
                font-size: 1.2rem;
            }
        }
    }

    &__content {

        // No changes needed here, as it contains the table itself
        &--link {
            text-decoration: none;
            color: rgba($white, 1)
        }

        &--asset {
            display: flex;
            align-items: center;

            & a {
                text-decoration: none;
            }
        }

        &--img {
            height: 2.3rem;
            width: 2.3rem;
            overflow: hidden;
            border-radius: 100%;
            margin-right: .5rem;

            & img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }

        &--assetname {
            display: flex;
            flex-direction: column;
            line-height: 1.5rem;

            & span {
                text-transform: uppercase;

                &.name {
                    text-transform: capitalize;
                }

                &.ticker {
                    font-size: .9rem;
                    font-weight: 500;
                    color: rgba($white, .5)
                }
            }
        }
    }

    &__table-wrapper {
        @media (max-width: 480px) {
            overflow-x: auto;
            /* Enable horizontal scrolling for the table content */
            -webkit-overflow-scrolling: touch;
            /* Smooth scrolling on iOS */
            position: relative;
            /* Needed for sticky positioning */
            width: 100%;
            /* Ensure it takes full width */

            @include hide-scrollbar;
        }
    }

    &__table {
        width: 100%;
        margin-top: 2rem;
        font-size: 1.2rem;
        border-collapse: separate;
        border-spacing: 0 1rem;

        & th,
        td {
            margin-bottom: 2rem;
            text-align: right;
            padding-bottom: .3rem;

            &:first-child,
            &:nth-child(2) {
                text-align: left;
            }
        }

        & td {
            border-bottom: 1px solid $white;
        }

        & th:nth-child(1) {
            width: 4%;
        }

        // Rank
        & th:nth-child(2) {
            width: 18%;
        }

        // Asset Name (Coin + Ticker)
        & th:nth-child(3) {
            width: 2%;
        }

        // Empty column
        & th:nth-child(4) {
            width: 10%;
        }

        // Price
        & th:nth-child(5) {
            width: 12%;
        }

        // Market Cap
        & th:nth-child(6) {
            width: 12%;
        }

        // 24h Volume
        & th:nth-child(7) {
            width: 8%;
        }

        // 24h Change
        & th:nth-child(8) {
            width: 8%;
        }

        // 7d Change
        & th:nth-child(9) {
            width: 8%;
        }

        // 30d Change
        & th:nth-child(10) {
            width: 18%;
        }

        @media (max-width: 480px) {
            width: auto;
            /* Allow table to be wider than viewport if content demands it */
            min-width: 600px;
            /* Adjust this value as needed to ensure enough scrollable area */

            & .fixed-column {
                position: sticky;
                left: 0;
                z-index: 10;
                /* Ensure it stays above scrolling content */
                background-color: #fff;
                /* Match your table background */
            }

            & .asset-column {
                left: 10px;
                /* Adjust based on the width of the first column (#) */
            }


            // Mobile Column Width Overrides
            & th:nth-child(1),
            & td:nth-child(1) {
                width: 10px;
                min-width: 10px;
                font-size: 1rem; // Adjust font size for mobile
            }

            & th:nth-child(2),
            & td:nth-child(2) {
                width: 120px;
                min-width: 120px;
                font-size: 1.1rem; // Adjust font size for mobile
            }

            & th:nth-child(3),
            & td:nth-child(3) {
                width: 0;
                display: none;
            }

            & th:nth-child(4),
            & td:nth-child(4) {
                width: 120px;
                min-width: 120px;
                font-size: 1.1rem; // Adjust font size for mobile
            }

            & th:nth-child(5),
            & td:nth-child(5),
            & th:nth-child(6),
            & td:nth-child(6),
            & th:nth-child(8),
            & td:nth-child(8),
            & th:nth-child(9),
            & td:nth-child(9) {
                width: 0;
                display: none;
            }

            & th:nth-child(7),
            & td:nth-child(7) {
                width: 100px;
                min-width: 100px;
                font-size: 1.1rem; // Adjust font size for mobile
            }

            & th:nth-child(10),
            & td:nth-child(10) {
                width: 150px;
                min-width: 150px;
            }
        }

        & tr {

            &:hover {
                background: rgba($white, .1);
                transition: all .4s ease;
                padding: 0 .2rem;
            }
        }

        & tbody tr:last-child td {}
    }

    &__pagination {
        display: flex;
        align-items: center;
        justify-content: center; // Center the pagination controls
        gap: 1.5rem; // Space between elements
        padding-top: 2rem; // Space above the pagination controls
        font-size: 1.2rem; // Match the table's general font size

        &--button {
            padding: .75rem 1rem; // Adjusted padding for buttons
            border: 1px solid #d4d4d4; // Border similar to filter buttons
            border-radius: .4rem;
            background: transparent;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: .5rem;
            font-size: 1.2rem; // Match info text font size
            color: $white; // Default text color

            &:hover:not(:disabled) {
                background: rgba(64, 64, 64, .1); // Hover effect
            }

            &:disabled {
                opacity: 0.4; // Make disabled buttons less prominent
                cursor: not-allowed; // Indicate it's not clickable
                background-color: transparent; // Ensure disabled background is transparent
            }

            & svg {
                width: .8rem; // Adjust SVG size
                height: .8rem;
                fill: currentColor; // Inherit color from parent text
            }
        }

        &--info {
            color: $white; // Text color for "Page X of Y"
            display: flex;
            align-items: center;
            gap: .25rem;
        }

        &--current,
        &--total {
            font-weight: 600; // Make page numbers bold
            color: $white; // Use your primary text color for emphasis
        }
    }

    &__actions {
        position: relative; // Position the dropdown relative to this container

        &--dropdown-button {
            padding: 0.4rem;
            background: transparent;
            border: none;
            cursor: pointer;

            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: #555;
            }
        }

        &--dropdown {
            position: absolute;
            top: 100%; // Position below the button
            right: 0;
            z-index: 20;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 0.4rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            min-width: 120px;
            overflow: hidden;

            button {
                padding: 0.8rem 1rem;
                text-align: left;
                background: transparent;
                border: none;
                cursor: pointer;
                transition: background-color 0.2s ease;

                &:hover {
                    background-color: #f4f4f4;
                }
            }
        }
    }
}
</style>
