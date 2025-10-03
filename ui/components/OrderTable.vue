<template>
    <div>
        <div class="admintable">
            <div class="admintable__content">

                <div class="admintable__headerarea">
                    <div class="admintable__headerarea--section">

                        <h1 class="admintable__h1">{{ tableName }}</h1>
                    </div>
                </div>

                <div class="admintable__table-wrapper">
                    <table class="admintable__table">

                        <thead class="admintable__tableh">
                            <tr>
                                <th v-for="(header, index) in headers" :key="index" :class="header.class">
                                    <span>
                                        <span>{{ header.text }}</span>
                                    </span>
                                </th>
                            </tr>
                        </thead>

                        <tbody class="admintable__tableb">
                            <tr v-for="(item, itemIndex) in localItems" :key="itemIndex">
                                <td v-for="(header, headerIndex) in headers" :key="headerIndex" :class="header.class">
                                    <div>

                                        <template v-if="header.key === 'actions'">
                                            <div class="admintable__actions">
                                                <button class="admintable__actions--dropdown-button"
                                                    v-if="!focusedItem._id && !currentItem && item._id !== `0`"
                                                    @click.stop="toggleDropdown(item)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-more-horizontal">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                </button>

                                                <button v-if="currentItem" class="admintable__actions--savebtn close"
                                                    @click="closeItem">Close</button>

                                                <div class="admintable__actions--dropdown"
                                                    v-if="dropdownOpenItemId === item._id">
                                                    <button @click.stop="viewItem(item)">View
                                                        Item</button>
                                                    <button @click.stop="deleteProduct(item._id)">Delete</button>
                                                </div>
                                            </div>
                                        </template>

                                        <template v-else-if="header.key === 'index'">
                                            <span>{{ `${itemIndex + 1}` }}</span>
                                        </template>

                                        <template v-else-if="header.key === 'name'">
                                            <span>{{ `${item['name']} | ${item['email']} | ${item['phoneNumber']}`
                                                }}</span>
                                        </template>

                                        <template v-else-if="header.key === 'delivery_date'">
                                            <span>{{ `${item['delivery_date']['day']}, ${item['delivery_date']['date']}
                                                ${item['delivery_date']['month']}`
                                            }}</span>
                                        </template>

                                        <template v-else-if="['createdAt', 'updatedAt'].includes(header.key)">
                                            <span>{{ new Date(item[header.key]).toLocaleString() }}</span>
                                        </template>

                                        <template v-else-if="['deliveryAddress'].includes(header.key)">
                                            <span>{{ truncateText(item[header.key]) }}</span>
                                        </template>

                                        <template v-else>
                                            <span>{{ `${item[header.key]}` }}</span>
                                        </template>

                                    </div>
                                </td>

                            </tr>
                        </tbody>

                    </table>
                </div>


            </div>

            <div v-if="currentItem">
                <OrderItemsTable :headers="orderItemsHeaders" :items="orderItems" />
            </div>


            <div v-if="!currentItem">
                <div class="admintable__pagination" v-if="hasPagination">
                    <button class="admintable__pagination--button" @click="$emit('prev-page')"
                        :disabled="currentPage === 1">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 192 512"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z">
                            </path>
                        </svg> Prev
                    </button>
                    <span class="admintable__pagination--info">
                        Page <strong class="admintable__pagination--current">{{ currentPage }}</strong> of
                        <strong class="admintable__pagination--total">{{ totalPages }}</strong>
                    </span>
                    <button class="admintable__pagination--button" @click="$emit('next-page')"
                        :disabled="currentPage === totalPages">
                        Next <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 192 512"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

        </div>



    </div>
</template>

<script>
import adminTable from '@/mixins/admin_table';
import { serverurl, handleFetchError, showErrorMessage } from '@/api';

export default {
    mixins: [adminTable],
    data() {
        return {
            orderItemsHeaders: [
                { text: 'Image', key: 'image', class: 'fixed-column' },
                { text: 'Product', key: 'productId' },
                { text: 'Unit', key: 'unit' },
                { text: 'Price', key: 'price' },
                { text: 'Amount', key: 'amount' },
                { text: 'Availability', key: 'availability' },
                { text: 'Created At', key: 'createdAt' },
                { text: 'Updated At', key: 'updatedAt' },
                // { text: 'Actions', key: 'actions' },
            ],
            orderItems: []
        }
    },
    methods: {
        viewItem(item) {
            // console.log(item, 'item here')
            //this.fetchProductVariants(item._id);
            this.seteditableItem(item)

            this.currentItem = item;

            this.getOrderDetails();
        },

        async getOrderDetails() {

            try {
                const { _id } = this.editableItem;

                const res = await fetch(`${serverurl}/admin/order/details?orderId=${_id}`, {
                    headers: this.getAuthHeaders()
                })

                await handleFetchError(res)

                const data = await res.json();

                const { orderItems } = data;

                this.orderItems = orderItems

                // console.log(this.orderItems, 'this.orderItems')
            } catch (error) {
                console.error('Error loading order details:', error)
                showErrorMessage && showErrorMessage(error.message || 'Failed to load products')
            }
        }
    }
}
</script>