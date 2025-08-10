<template>
    <div>
        <div class="adminui">
            <AdminProductsTable :headers="tableHeaders" :items="allAssets" :has-pagination="true"
                :current-page="page" :total-pages="totalPages" @prev-page="prevPage" @next-page="nextPage"
                @edit-item="editItem" @delete-item="deleteItem" />
        </div>
    </div>
</template>

<script>
import { serverurl, handleFetchError, showErrorMessage } from '@/api'

export default {
    data() {
        return {
            // Your product data
            allAssets: [
                {
                    "_id": { "$oid": "67a3e90d8f76755bc9adc621" },
                    "image": "https://payoorimages.s3.ap-southeast-2.amazonaws.com/products/1739212546567-6u2c1d9wieu.webp",
                    "name": "rice (long grain)",
                    "variantCount": 5,
                    "metadata": "grains, staple, side",
                    "createdAt": { "$date": "2025-02-05T22:41:17.492Z" },
                    "updatedAt": { "$date": "2025-08-03T20:54:50.186Z" },
                },
                // Add more product items here...
            ],
            // Define the headers dynamically for your new product data
            tableHeaders: [
                { text: 'Image', key: 'image', class: 'fixed-column' },
                { text: 'Product Name', key: 'name', class: 'fixed-column asset-column' },
                { text: 'Variants', key: 'variantCount' },
                { text: 'Metadata', key: 'metadata' },
                { text: 'Created At', key: 'createdAt' },
                { text: 'Updated At', key: 'updatedAt' },
                // New Actions column
                { text: 'Actions', key: 'actions' },
            ],
            currentPage: 1,
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 1,
        }
    },
    mounted() {
        this.fetchProducts();
    },
    computed: {
        /*totalPages() {
            return Math.ceil(this.allAssets.length / this.itemsPerPage);
        }*/
    },
    methods: {
        getAuthHeaders() {
            const token = localStorage.getItem('admin_token');
            return {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
        },
        async fetchProducts() {
            try {
                const query = new URLSearchParams({
                    search: this.searchQuery,
                    page: this.page,
                    limit: this.limit
                }).toString()

                const res = await fetch(`${serverurl}/admin/products-with-variants?${query}`, {
                    headers: this.getAuthHeaders()
                })

                await handleFetchError(res);

                const data = await res.json();

                console.log(data, 'data here')

                this.allAssets = data.products;

                this.totalPages = data.pages || 1;
            } catch (error) {
                console.error('Error loading products:', error)
            }
        },
        prevPage() {
            if (this.page > 1) {
                this.page--
                this.fetchProducts()
            }
        },
        nextPage() {
            if (this.page < this.totalPages) {
                this.page++
                this.fetchProducts()
            }
        },
        // Placeholder methods for handling the actions
        editItem(item) {
            console.log("Editing item:", item);
            // Implement your edit logic here, e.g., open a modal or navigate to an edit page
        },
        deleteItem(item) {
            console.log("Deleting item:", item);
            // Implement your delete logic here, e.g., show a confirmation modal and then make an API call
        }
    }
}
</script>

<style lang="scss" scoped>
.adminui {
    padding: 4rem 30rem;
    background: rgba($black, .9);
    min-height: 100vh;
}
</style>