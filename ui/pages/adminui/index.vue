<template>
    <div>
        <!-- LOGIN VIEW -->
        <div v-if="!isAuthed" class="adminlogin">
            <div class="adminlogin__content">
                <div class="adminlogin__form">
                    <h2 class="adminlogin__title">Admin Login</h2>
                    <form @submit.prevent="login">
                        <div class="adminlogin__field">
                            <label for="email">Email</label>
                            <input type="email" v-model="email" id="email" required />
                            <small v-if="email && !validEmail" class="adminlogin__error-msg">
                                Please enter a valid email.
                            </small>
                        </div>

                        <div class="adminlogin__field">
                            <label for="password">Password</label>
                            <input type="password" v-model="password" id="password" required />
                        </div>

                        <button type="submit" class="button-primary" :disabled="!canSubmit">
                            Login
                        </button>
                    </form>
                    <p v-if="error" class="adminlogin__error">{{ error }}</p>
                </div>
            </div>
        </div>

        <!-- DASHBOARD VIEW -->
        <div v-else class="adminui">
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
                        <input type="text" v-model="searchQuery" @input="fetchProducts"
                            placeholder="Search products by name..." />
                    </div>
                </div>

                <div class="admintable__top--side right">
                    <div class="admintable__top--pills right">
                        <button v-for="(filter, index) in filters" :key="index" class="admintable__top--button"
                            :class="{ current: currentfilter === filter }" @click="setCurrent(filter)">
                            <span>{{ filter }}</span>
                        </button>
                    </div>
                    <button class="logout" @click="logout">Log out</button>
                </div>
            </div>

            <div>
                <AdminProductsTable :headers="tableHeaders" :items="allAssets" :has-pagination="true"
                    :tableName="'Products'" :current-page="page" :total-pages="totalPages" @prev-page="prevPage"
                    @next-page="nextPage" @edit-item="editItem" @delete-item="deleteItem" :model="'NewProduct'" />
            </div>
        </div>
    </div>
</template>

<script>
import AdminProductsTable from '@/components/AdminProductsTable.vue'
import { serverurl, handleFetchError, showErrorMessage } from '@/api'

export default {
    name: 'AdminPortal',
    components: { AdminProductsTable },
    data() {
        return {
            // auth
            isAuthed: false,
            email: '',
            password: '',
            error: '',

            // dashboard state
            allAssets: [],
            tableHeaders: [
                { text: 'Image', key: 'image', class: 'fixed-column' },
                { text: 'Product Name', key: 'name', class: 'fixed-column asset-column' },
                { text: 'Variants', key: 'variantCount' },
                { text: 'Metadata', key: 'metadata' },
                { text: 'Created At', key: 'createdAt' },
                { text: 'Updated At', key: 'updatedAt' },
                { text: 'Actions', key: 'actions' }
            ],
            searchQuery: '',
            //filters: ['All'], // extend as needed
            currentfilter: 'All',
            page: 1,
            limit: 10,
            totalPages: 1
        }
    },
    computed: {
        validEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(this.email)
        },
        canSubmit() {
            return this.validEmail && this.password.trim().length > 0
        }
    },
    mounted() {
        if (process.client) {
            const token = localStorage.getItem('admin_token')
            if (token) {
                this.isAuthed = true
                this.fetchProducts()
            }
        }
    },
    methods: {
        // -------- AUTH ----------
        async login() {
            this.error = ''
            if (!this.canSubmit) return

            try {
                const response = await fetch(`${serverurl}/admin/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: this.email, password: this.password })
                })

                await handleFetchError(response)
                const data = await response.json()

                if (!response.ok) {
                    throw new Error(data.error || 'Login failed')
                }

                if (process.client) {
                    localStorage.setItem('admin_token', data.token)
                }

                this.isAuthed = true
                this.fetchProducts()
            } catch (err) {
                this.error = err.message
                this.isAuthed = false
            }
        },
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

        // -------- DASHBOARD ----------
        getAuthHeaders() {
            const token = process.client ? localStorage.getItem('admin_token') : ''
            return {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token || ''}`
            }
        },
        setCurrent(filter) {
            this.currentfilter = filter
            this.page = 1
            this.fetchProducts()
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

                // If token expired → flip back to login view gracefully
                if (res.status === 401) {
                    this.logout()
                    showErrorMessage && showErrorMessage('Session expired. Please log in again.')
                    return
                }

                await handleFetchError(res)
                const data = await res.json()

                this.allAssets = data.products || []
                this.totalPages = data.pages || 1
            } catch (error) {
                console.error('Error loading products:', error)
                showErrorMessage && showErrorMessage(error.message || 'Failed to load products')
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
        editItem(item) {
            // open editor / route / modal as you prefer
            console.log('Editing item:', item)
        },
        deleteItem(item) {
            console.log('Deleting item:', item)
        }
    }
}
</script>

<style scoped lang="scss">
/* --- Login styles (from your component) --- */
.adminlogin {
    &__content {
        min-height: 100vh;
        background: #f7f7f7;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }

    &__form {
        background: white;
        padding: 3rem;
        border-radius: 1.5rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
    }

    &__title {
        font-size: 2rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    &__field {
        margin-bottom: 1.5rem;

        label {
            display: block;
            margin-bottom: .5rem;
            font-weight: 600;
        }

        input {
            width: 100%;
            padding: .8rem;
            border: 1px solid #ccc;
            border-radius: .8rem;
            font-size: 1rem;
        }
    }

    .button-primary {
        width: 100%;
        padding: 1rem;
        font-size: 1.2rem;
        color: white;
        border: none;
        border-radius: 1rem;
        cursor: pointer;
        transition: background .3s;

        &:disabled {
            background: #a0a0a0;
            cursor: not-allowed;
        }

        &:hover:not(:disabled) {
            background: #0056b3;
        }
    }

    &__error {
        margin-top: 1rem;
        color: red;
        text-align: center;
        font-size: 1rem;
    }

    &__error-msg {
        color: #d9534f;
        font-size: .9rem;
        margin-top: .2rem;
        display: block;
    }
}

/* --- Dashboard styles you had --- */
.adminui {
    padding: 4rem 30rem;
    background: rgba(0, 0, 0, .9);
    min-height: 100vh;
}

/* quick pill styles; adjust to your design system */
.admintable__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.admintable__top--side.left {
    flex: 1;
}

.admintable__top--side.right {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.admintable__top--pills .admintable__top--button {
    padding: .4rem .8rem;
    border-radius: 1rem;
}

.logout {
    background: #444;
    color: #fff;
    padding: .5rem .9rem;
    border-radius: .6rem;
}
</style>