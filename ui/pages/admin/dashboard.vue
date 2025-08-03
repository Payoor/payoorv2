<template>
    <div class="admin-dashboard">
        <div class="dashboard-header">
            <h1>Admin Dashboard</h1>
            <div class="dashboard-actions">
                <button @click="showAddProductForm = true">Add Product</button>
                <button @click="$router.push('/admin/categorycards')">View Category Cards</button>
                <button @click="logout">Logout</button>
            </div>
        </div>

        <div class="search-bar">
            <input type="text" v-model="searchQuery" @input="fetchProducts" placeholder="Search products by name..." />
        </div>

        <div v-if="showAddProductForm" class="add-product-form-overlay">
            <div class="add-product-form">
                <h2>Add New Product</h2>
                <div>
                    <label>Name</label>
                    <textarea v-model="newProduct.name" />
                </div>
                <div>
                    <label>Description</label>
                    <textarea v-model="newProduct.generatedDescription" />
                </div>
                <div>
                    <label>Categories (comma separated)</label>
                    <textarea v-model="newProduct.generatedCategoriesString" />
                </div>
                <div>
                    <label>Upload Image</label>
                    <input type="file" @change="handleImageUpload" />
                    <span v-if="imageUploading" class="loading-text">
                        <span class="spinner"></span> Uploading image...
                    </span>
                </div>
                <div>
                    <button @click="submitNewProduct" :disabled="imageUploading || productSubmitting">
                        <span v-if="productSubmitting" class="spinner"></span>
                        {{ productSubmitting ? 'Submitting...' : 'Submit' }}
                    </button>
                    <button @click="showAddProductForm = false">Cancel</button>
                </div>
            </div>
        </div>

        <table class="product-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Categories</th>
                    <th>Synced</th>
                    <th>Variant Count</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(product, index) in products" :key="product._id">
                    <tr>
                        <td><img :src="product.image || '/imgs/placeholder.png'" class="product-thumb" /></td>
                        <td><textarea v-model="product.name" /></td>
                        <td><textarea v-model="product.generatedDescription" /></td>
                        <td><textarea v-model="product.generatedCategoriesString" /></td>
                        <td><input type="checkbox" v-model="product.synced_to_algolia" /></td>
                        <td>{{ product.variantCount }}</td>
                        <td>{{ formatDate(product.createdAt) }}</td>
                        <td>{{ formatDate(product.updatedAt) }}</td>
                        <td>
                            <button @click="toggleVariants(index)">
                                {{ product.showVariants ? 'Hide Variants' : 'Show Variants' }}
                            </button>
                            <button @click="showProductCategories(product._id, product.name)">Show Categories</button>
                            <button @click="saveProduct(product)" :disabled="product.isSaving">
                                <span v-if="product.isSaving" class="spinner"></span> Save
                            </button>
                            <button @click="deleteProduct(product._id)">Delete</button>
                        </td>
                    </tr>
                    <tr v-if="product.showVariants">
                        <td colspan="9">
                            <div class="variant-list">
                                <div v-for="variant in product.variants" :key="variant._id" class="variant-row">
                                    <div>
                                        <label>Unit</label>
                                        <textarea v-model="variant.unit" />
                                    </div>
                                    <div>
                                        <label>Price</label>
                                        <input type="number" v-model.number="variant.price" />
                                    </div>
                                    <div>
                                        <label>Availability</label>
                                        <textarea v-model="variant.availability" />
                                    </div>

                                    <div>
                                        <button @click="deleteVariant(product, variant)">Delete Variant</button>
                                    </div>
                                    <div>
                                        <button @click="saveVariant(product._id, variant)" :disabled="variant.isSaving">
                                            <span v-if="variant.isSaving" class="spinner"></span> Save
                                        </button>
                                    </div>
                                </div>

                                <button @click="product.showAddVariantForm = !product.showAddVariantForm">
                                    {{ product.showAddVariantForm ? 'Cancel' : 'Add New Variant' }}
                                </button>

                                <div v-if="product.showAddVariantForm" class="add-variant-form">
                                    <h4>Add New Variant</h4>
                                    <div class="variant-row">
                                        <div>
                                            <label>Unit</label>
                                            <textarea v-model="product.newVariant.unit" />
                                        </div>
                                        <div>
                                            <label>Price</label>
                                            <input type="number" v-model.number="product.newVariant.price" />
                                        </div>
                                        <div>
                                            <label>Availability</label>
                                            <textarea v-model="product.newVariant.availability" />
                                        </div>
                                        <div>
                                            <label>Upload Image</label>
                                            <input type="file" @change="e => handleVariantImageUpload(product, e)" />
                                            <span v-if="variantImageUploading[product._id]" class="loading-text">
                                                <span class="spinner"></span> Uploading image...
                                            </span>
                                        </div>
                                        <div>
                                            <button @click="submitNewVariant(product)"
                                                :disabled="variantImageUploading[product._id]">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>

        <!-- 👇 Pagination Navigation -->
        <div class="pagination-nav">
            <button @click="prevPage" :disabled="page <= 1">Previous</button>
            <span>Page {{ page }} of {{ totalPages }}</span>
            <button @click="nextPage" :disabled="page >= totalPages">Next</button>
        </div>
    </div>
</template>


<script>
import { serverurl, handleFetchError, showErrorMessage } from '@/api'

export default {
    name: 'AdminDashboard',
    data() {
        return {
            products: [],
            showAddProductForm: false,
            newProduct: {
                name: '',
                generatedDescription: '',
                generatedCategoriesString: '',
                image: ''
            },
            imageUploading: false,
            variantImageUploading: {},
            productSubmitting: false,
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 1,
        }
    },
    async mounted() {
        await this.fetchProducts()
    },
    watch: {
        searchQuery() {
            this.page = 1
            this.fetchProducts()
        }
    },
    methods: {
        getAuthHeaders() {
            const token = localStorage.getItem('admin_token');
            return {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
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
        onSearchInput() {
            console.log('Search:', this.searchQuery);
        },
        async handleImageUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            const formData = new FormData();
            formData.append('image', file);
            this.imageUploading = true;

            try {
                const response = await fetch(`${serverurl}/admin/upload-image`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
                    },
                    body: formData
                });

                await handleFetchError(response);

                const data = await response.json();

                if (data.url) {
                    this.newProduct.image = data.url;
                } else {
                    showErrorMessage('Failed to upload image');
                }
            } catch (err) {
                console.error('Image upload error:', err);
                showErrorMessage(err.message || 'Image upload failed');
            } finally {
                this.imageUploading = false;
            }
        },
        async submitNewProduct() {
            const { name, generatedDescription, generatedCategoriesString, image } = this.newProduct
            const generatedCategories = generatedCategoriesString.split(',').map(c => c.trim())

            if (!name || !image) {
                alert('Name and image are required')
                return
            }

            this.productSubmitting = true

            try {
                const res = await fetch(`${serverurl}/admin/create-product`, {
                    method: 'POST',
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify({ name, generatedDescription, generatedCategories, image })
                });

                await handleFetchError(res)

                const data = await res.json()
                if (data.error) return alert(data.error)

                this.products.unshift({
                    ...data.product,
                    generatedCategoriesString: data.product.generatedCategories.join(', '),
                    showVariants: false,
                    showAddVariantForm: false,
                    newVariant: { unit: '', price: 0, availability: '' }
                })

                this.newProduct = { name: '', generatedDescription: '', generatedCategoriesString: '', image: '' }
                this.showAddProductForm = false
            } catch (err) {
                console.error('Add product error:', err)
                alert('Failed to create product')
            } finally {
                this.productSubmitting = false
            }
        },
        logout() {
            localStorage.removeItem('admin_token')
            this.$router.push('/admin/login')
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

                const data = await res.json()

                this.products = (data.products || []).map(p => ({
                    ...p,
                    showVariants: false,
                    showAddVariantForm: false,
                    newVariant: { unit: '', price: 0, availability: '' },
                    generatedCategoriesString: (p.generatedCategories || []).join(', ')
                }))

                this.totalPages = data.pages || 1
            } catch (error) {
                console.error('Error loading products:', error)
            }
        },
        formatDate(dateStr) {
            const date = new Date(dateStr)
            return date.toLocaleDateString()
        },
        toggleVariants(index) {
            this.products[index].showVariants = !this.products[index].showVariants
        },
        async deleteProduct(productId) {
            if (!confirm('Are you sure you want to delete this product and its variants?')) return;

            try {
                const res = await fetch(`${serverurl}/admin/delete-product/${productId}`, {
                    method: 'DELETE',
                    headers: this.getAuthHeaders()
                });

                await handleFetchError(res)

                if (res.ok) this.products = this.products.filter(p => p._id !== productId);
                else alert('Failed to delete product');
            } catch (error) {
                console.error('Delete product error:', error);
            }
        },
        async deleteVariant(product, variant) {
            if (!confirm('Delete this variant?')) return;

            try {
                const res = await fetch(`${serverurl}/admin/delete-variant/${variant._id}`, {
                    method: 'DELETE',
                    headers: this.getAuthHeaders()
                });

                await handleFetchError(res)

                if (res.ok) {
                    product.variants = product.variants.filter(v => v._id !== variant._id);
                    product.variantCount--;
                } else alert('Failed to delete variant');
            } catch (error) {
                console.error('Delete variant error:', error);
            }
        },
        async saveProduct(product) {
            try {
                const updated = {
                    name: product.name,
                    image: product.image,
                    generatedDescription: product.generatedDescription,
                    generatedCategories: product.generatedCategoriesString.split(',').map(c => c.trim()),
                    synced_to_algolia: product.synced_to_algolia
                }

                console.log(updated)

                const res = await fetch(`${serverurl}/admin/update-product/${product._id}`, {
                    method: 'PUT',
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify(updated)
                })

                await handleFetchError(res)
            } catch (error) {
                console.error('Update error:', error)
            }
        },
        async saveVariant(productId, variant) {
            try {
                const updated = {
                    unit: variant.unit,
                    price: variant.price,
                    availability: variant.availability,
                    image: variant.image || ''
                }

                const res = await fetch(`${serverurl}/admin/update-variant/${variant._id}`, {
                    method: 'PUT',
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify(updated)
                })

                await handleFetchError(res)
            } catch (error) {
                console.error('Variant update error:', error)
            }
        },
        async handleVariantImageUpload(product, event) {
            const file = event.target.files[0];
            if (!file) return;

            const formData = new FormData();
            formData.append('image', file);
            this.$set(this.variantImageUploading, product._id, true);

            try {
                const response = await fetch(`${serverurl}/admin/upload-image`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
                    },
                    body: formData
                });

                await handleFetchError(response)

                const data = await response.json();

                if (data.url) {
                    product.newVariant.image = data.url;
                } else {
                    alert('Failed to upload variant image');
                }
            } catch (err) {
                console.error('Variant image upload error:', err);
                alert('Variant image upload failed');
            } finally {
                this.$set(this.variantImageUploading, product._id, false);
            }
        },
        async submitNewVariant(product) {
            const { unit, price, availability, image } = product.newVariant;
            if (!unit || !price || !availability || !image) {
                alert('Please fill all fields and upload an image.');
                return;
            }

            try {
                const res = await fetch(`${serverurl}/admin/add-variant/${product._id}`, {
                    method: 'POST',
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify({ unit, price, availability, image })
                });

                await handleFetchError(res);

                const data = await res.json();

                //if (data.error) return alert(data.error);

                alert('variant added');

                product.showAddVariantForm = false;
            } catch (err) {
                console.error('Add variant error:', err);
                alert('Failed to add variant');
            }
        },
        showProductCategories(product_id, product_name) {
            console.log(product_id)
            this.$router.push(`/admin/categorycards?product_id=${product_id}&product_name=${product_name}`)
        }
    }
}
</script>

<style scoped lang="scss">
.spinner {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #ccc;
    border-top: 2px solid $primary-color;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    margin-right: 0.4rem;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.search-bar {
    margin-bottom: 1.5rem;

    input[type="text"] {
        width: 100%;
        padding: 0.8rem 1rem;
        font-size: 1.2rem;
        border: 1px solid #ccc;
        border-radius: 0.4rem;
        outline: none;
    }
}

.admin-dashboard {
    padding: 2rem;
    overflow-x: auto;
    background: #fff;

    min-height: 100vh;
}

.add-product-form {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    z-index: 999;
    border: 1px solid #ddd;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 600px;

    h2 {
        margin-bottom: 1rem;
    }

    div {
        margin-bottom: 1rem;
    }

    textarea,
    input[type="file"] {
        width: 100%;
        padding: 0.8rem;
        font-size: 1.2rem;
        resize: vertical;
    }

    button {
        margin-right: 1rem;
        padding: 0.6rem 1.2rem;
        font-size: 1.2rem;
        cursor: pointer;
        background: $primary-color;
        color: white;
        border: none;
        border-radius: 0.4rem;
    }

    &-overlay {
        background: rgba(0, 0, 0, .6);
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
    }
}

.add-product-form span.loading-text {
    display: inline-block;
    margin-top: 0.5rem;
    color: #888;
    font-size: 0.95rem;
}

.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1.5rem;

    h1 {
        font-size: 2rem;
        font-weight: bold;
        margin: 0;
    }

    .dashboard-actions {
        display: flex;
        gap: 1rem;

        button {
            padding: 0.6rem 1.2rem;
            font-size: 1.2rem;
            background: $primary-color;
            color: white;
            border: none;
            border-radius: 0.4rem;
            cursor: pointer;

            &:last-child {
                background: #dc3545;
            }
        }
    }
}

.product-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1.3rem;

    th,
    td {
        border: 1px solid #ddd;
        padding: 0.8rem;
        text-align: left;
        vertical-align: top;
    }

    th {
        background-color: #f4f4f4;
        font-weight: bold;
    }

    textarea {
        width: 100%;
        min-height: 3rem;
        font-size: 1.2rem;
        padding: 0.4rem;
        font-family: inherit;
        resize: vertical;

        border: none;
        outline: none;
    }

    input[type="text"],
    input[type="checkbox"],
    input[type="number"] {
        width: 100%;
        font-size: 1.2rem;
        padding: 0.4rem;
    }

    button {
        margin-top: 0.3rem;
        margin-right: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        cursor: pointer;
        border: none;
        border-radius: 0.3rem;
    }
}

.product-thumb {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 0.5rem;
}

.variant-list {
    padding: 1rem;
    background: #fafafa;
    border: 1px solid #eee;
    border-radius: 0.5rem;

    .variant-row {
        margin-bottom: 1rem;
        font-size: 1.2rem;
        display: flex;
        gap: 2rem;
        align-items: center;

        div {
            display: flex;
            flex-direction: column;
        }

        label {
            font-size: 0.9rem;
            color: #444;
            margin-bottom: 0.3rem;
        }
    }
}

.pagination-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    gap: 1rem;

    button {
        padding: 0.5rem 1rem;
        font-size: 1.1rem;
        background: $primary-color;
        color: #fff;
        border: none;
        border-radius: 0.4rem;
        cursor: pointer;

        &:disabled {
            background: #ccc;
            cursor: not-allowed;
        }
    }

    span {
        font-size: 1.2rem;
        font-weight: 500;
    }
}
</style>