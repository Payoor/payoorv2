<template>
    <div>
        <div class="adminui">
            <AdminSideNav />

            <div class="admintable__top">
                <div class="admintable__top--side left">
                    <div class="admintable__searchinput">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                            width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path
                                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                            </path>
                        </svg>
                        <input type="text" v-model="searchQuery" @input="fetchItemsUsingQuery"
                            placeholder="Search orders..." />
                    </div>
                </div>

                <div class="admintable__top--side right">

                    <button class="logout" @click="logout">Log out</button>
                </div>
            </div>

            <OrderTable :tableName="'User Orders'" :headers="headers" :items="items" :has-pagination="true"
                :current-page="page" :total-pages="totalPages" @prev-page="prevPage" @next-page="nextPage" />
        </div>
    </div>
</template>

<script>
import { serverurl, handleFetchError, showErrorMessage } from '@/api';

export default {
    data() {
        return {
            headers: [
                { text: 'Index', key: 'index', class: 'fixed-column' },
                { text: 'Customer', key: 'name', class: 'fixed-column' },
                { text: 'Delivery Address', key: 'delivery_address' },
                { text: 'Delivery Date', key: 'delivery_date' },
                { text: 'Delivery Fee', key: 'delivery_fee' },
                { text: 'Subtotal', key: 'subtotal' },
                { text: 'Total', key: 'total' },
                { text: 'Promo code used', key: 'promo_code' },
                { text: 'Promo code type', key: 'promo_code_type' },
                { text: 'Actions', key: 'actions' }
            ],
            items: [],
            searchQuery: '',
            currentfilter: 'All',
            page: 1,
            limit: 10,
            totalPages: 1
        }
    },
    mounted() {
        this.fetchItems();
    },
    methods: {
        logout() {
            if (process.client) {
                localStorage.removeItem('admin_token')
            }
            // wipe state
            this.isAuthed = false
            this.allAssets = []
            this.email = ''
            this.password = ''
            this.error = ''
        },
        getAuthHeaders() {
            const token = process.client ? localStorage.getItem('admin_token') : ''
            return {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token || ''}`
            }
        },
        fetchItemsUsingQuery() {
            this.page = 1;
            this.fetchItems();
        },
        async fetchItems() {
            try {
                const query = new URLSearchParams({
                    search: this.searchQuery,
                    page: this.page,
                    limit: this.limit
                }).toString()

                const res = await fetch(`${serverurl}/admin/orders?${query}`, {
                    headers: this.getAuthHeaders()
                })

                await handleFetchError(res)
                const data = await res.json();
                const { orders } = data;
                //  console.log(orders)
                this.items = orders
                this.totalPages = data.pages || 1
            } catch (error) {
                console.error('Error loading products:', error)
                showErrorMessage && showErrorMessage(error.message || 'Failed to load products')
            }
        },
        prevPage() {
            //  console.log('let us go to the previous page')
            if (this.page > 1) {
                this.page--
                this.fetchItems()
            }
        },
        nextPage() {
            // console.log('let us go to the next page')
            if (this.page < this.totalPages) {
                this.page++
                // console.log(this.page)
                this.fetchItems()
            }
        },
    }
}
</script>