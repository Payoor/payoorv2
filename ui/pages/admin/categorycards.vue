<template>
    <div class="admin-category-dashboard">
        <div class="dashboard-header">
            <h1 @click="$router.push('/admin/dashboard')">
                <span class="svg"><svg>
                        <use xlink:href="/svg/symbol-defs.svg#icon-arrow_back"></use>
                    </svg>
                </span>
                <span>
                    Category Dashboard {{ $route.query.product_name ? $route.query.product_name : "" }}
                </span>
            </h1>
            <div class="dashboard-actions">
                <button v-if="!hasProductId" @click="showAddCategoryForm = true">Add Category</button>
                <button @click="logout">Logout</button>
            </div>
        </div>

        <div class="search-bar">
            <input type="text" v-model="searchQuery" @input="filterCategories"
                placeholder="Search categories by name..." />
        </div>

        <div v-if="showAddCategoryForm" class="add-category-form-overlay">
            <div class="add-category-form">
                <h2>Add New Category</h2>
                <div>
                    <label>Name</label>
                    <input type="text" v-model="newCategory.name" />
                </div>
                <div>
                    <label>Description</label>
                    <textarea v-model="newCategory.description" />
                </div>
                <div>
                    <label>Hex Color</label>
                    <input type="text" v-model="newCategory.hexcolor" />
                </div>
                <div>
                    <label>Upload Image</label>
                    <input type="file" @change="handleImageUpload" />
                    <span v-if="imageUploading" class="loading-text">
                        <span class="spinner"></span> Uploading image...
                    </span>
                </div>
                <div>
                    <button @click="submitNewCategory" :disabled="imageUploading || categorySubmitting">
                        <span v-if="categorySubmitting" class="spinner"></span>
                        {{ categorySubmitting ? 'Submitting...' : 'Submit' }}
                    </button>
                    <button @click="showAddCategoryForm = false">Cancel</button>
                </div>
            </div>
        </div>

        <div class="category-pills-section">
            <button @click="showCategoryPills = !showCategoryPills" class="view-more-button">
                {{ showCategoryPills ? 'Hide Categories' : 'View More Categories' }}
            </button>
            <div v-if="showCategoryPills" class="category-pills-container">
                <span v-for="category in unlinkedCategories" :key="category._id" class="category-pill"
                    :style="{ backgroundColor: category.hexcolor || '#249b48' }"
                    @click="showCategoryDescription(category)">
                    {{ category.name }}
                </span>
                <p v-if="unlinkedCategories.length === 0 && !loadingCategories" class="no-categories-pills">
                    No more categories to link to this product.
                </p>
            </div>

            <div v-if="showCategoryDetails && selectedCategory" class="category-details-overlay">
                <div class="category-details-popup">
                    <h2>{{ selectedCategory.name }}</h2>
                    <p class="description-text">{{ selectedCategory.description }}</p>
                    <div class="button-group">
                        <button v-if="hasProductId && !isCategoryLinked(selectedCategory._id)"
                            @click="addCategoryToProduct(selectedCategory)">Add</button>

                        <button v-if="hasProductId && isCategoryLinked(selectedCategory._id)"
                            @click="removeCategoryFromProduct(selectedCategory)">Remove</button>

                        <button @click="closeCategoryDetails" class="cancel-button">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <table class="category-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Hex color</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="loadingCategories">
                    <td colspan="5" class="loading-row">
                        <span class="spinner"></span> Loading categories...
                    </td>
                </tr>
                <tr v-else-if="filteredCategories.length === 0 && !searchQuery">
                    <td colspan="5" class="no-categories">
                        No categories found. Add a new one!
                    </td>
                </tr>
                <tr v-else-if="filteredCategories.length === 0 && searchQuery">
                    <td colspan="5" class="no-categories">
                        No categories found matching "{{ searchQuery }}".
                    </td>
                </tr>
                <tr v-for="category in filteredCategories" :key="category._id">
                    <td><img :src="category.image || '/imgs/placeholder.png'" class="category-thumb" /></td>
                    <td><input type="text" v-model="category.name" /></td>
                    <td><textarea v-model="category.description" /></td>
                    <td><input type="text" v-model="category.hexcolor" /></td>
                    <td>
                        <button @click="saveCategory(category)" :disabled="category.isSaving">
                            <span v-if="category.isSaving" class="spinner"></span> Save
                        </button>
                        <button v-if="hasProductId && isCategoryLinked(category._id)"
                            @click="removeCategoryFromProduct(category)" :disabled="category.isRemoving"
                            class="remove-button">
                            <span v-if="category.isRemoving" class="spinner"></span> Remove
                        </button>
                        <button v-if="!hasProductId" @click="deleteCategory(category)" :disabled="category.isDeleting">
                            <span v-if="category.isDeleting" class="spinner"></span> Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { serverurl, handleFetchError, showErrorMessage } from '@/api'

export default {
    name: 'AdminCategoryDashboard',
    data() {
        return {
            categories: [], // Categories for the main table (product-specific by default)
            allCategories: [], // New array to store all categories for the pills
            showAddCategoryForm: false,
            newCategory: {
                name: '',
                description: '',
                hexcolor: '',
                image: ''
            },
            imageUploading: false,
            categorySubmitting: false,
            searchQuery: '',
            loadingCategories: false,
            showCategoryPills: false,
            loadingAllCategories: false, // New state for loading all categories
            selectedCategory: null, // Holds the category whose pill was clicked
            showCategoryDetails: false, // Controls visibility of the description popup
            productCategories: [], // Stores IDs of categories linked to the current product
        }
    },
    computed: {
        filteredCategories() {
            if (!this.searchQuery) {
                return this.categories;
            }
            const query = this.searchQuery.toLowerCase();
            return this.categories.filter(category =>
                category.name.toLowerCase().includes(query) ||
                category.description.toLowerCase().includes(query)
            );
        },
        hasProductId() {
            return !!this.$route.query.product_id;
        },
        // New computed property to filter categories not linked to the current product
        unlinkedCategories() {
            if (!this.hasProductId) {
                return this.allCategories; // If not on a product page, show all categories
            }
            // Filter all categories to show only those whose IDs are NOT in productCategories
            return this.allCategories.filter(category =>
                !this.productCategories.includes(category._id)
            );
        }
    },
    watch: {
        showCategoryPills(newValue) {
            if (newValue && this.allCategories.length === 0 && !this.loadingAllCategories) {
                this.fetchAllCategories();
            }
        }
    },
    async mounted() {
        await this.fetchCategories(); // Fetch product-specific categories when component mounts
    },
    methods: {
        getAuthHeaders() {
            const token = localStorage.getItem('admin_token');
            return {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
        },
        async fetchCategories() {
            this.loadingCategories = true;
            this.productCategories = []; // Reset productCategories on each fetch
            const productId = this.$route.query.product_id;

            try {
                let url = `${serverurl}/admin/categories`;
                if (productId) {
                    url += `?product_id=${productId}`;
                }

                const res = await fetch(url, {
                    headers: this.getAuthHeaders()
                });
                await handleFetchError(res);
                const data = await res.json();
                const { categories } = data;

                this.categories = categories.map(cat => ({
                    ...cat,
                    isSaving: false,
                    isDeleting: false,
                    isRemoving: false, // New state for removing from product
                }));

                // If product_id exists, populate productCategories with the IDs of these categories
                if (productId) {
                    this.productCategories = categories.map(cat => cat._id);
                }

            } catch (error) {
                console.error('Error fetching categories:', error);
                showErrorMessage('Failed to load categories.');
            } finally {
                this.loadingCategories = false;
            }
        },
        async fetchAllCategories() {
            this.loadingAllCategories = true;
            try {
                const res = await fetch(`${serverurl}/admin/categories`, { // This fetch DOES NOT include product_id
                    headers: this.getAuthHeaders()
                });

                const data = await res.json();

                const { categories } = data;

                this.allCategories = categories.map(cat => ({
                    ...cat,
                    isSaving: false,
                    isDeleting: false,
                }));
            } catch (error) {
                console.error('Error fetching all categories:', error);
                showErrorMessage('Failed to load all categories.');
            } finally {
                this.loadingAllCategories = false;
            }
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
                    this.newCategory.image = data.url;
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
        async submitNewCategory() {
            const { name, description, image, hexcolor } = this.newCategory;

            if (!name || !description || !image || !hexcolor) {
                alert('Name, description, hexcolor, and image are required!');
                return;
            }

            this.categorySubmitting = true;

            try {
                let url = `${serverurl}/admin/create-category`;
                // If we're on a product-specific dashboard, add it directly to that product
                if (this.$route.query.product_id) {
                    url += `?product_id=${this.$route.query.product_id}`;
                }

                const res = await fetch(url, {
                    method: 'POST',
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify({ name, description, image, hexcolor })
                });

                await handleFetchError(res);

                const data = await res.json();

                if (data.error) {
                    showErrorMessage(data.error);
                    return;
                }

                const newCat = {
                    ...data.category,
                    isSaving: false,
                    isDeleting: false,
                    isRemoving: false,
                };

                // Add to product-specific list if relevant, and mark as linked
                if (this.$route.query.product_id) {
                    this.categories.unshift(newCat);
                    this.productCategories.push(newCat._id); // Mark as linked
                }
                this.allCategories.unshift(newCat); // Always add to allCategories

                this.newCategory = { name: '', description: '', hexcolor: '', image: '' };
                this.showAddCategoryForm = false;
                alert('Category created successfully!');
            } catch (err) {
                console.error('Add category error:', err);
                showErrorMessage(err.message || 'Failed to create category');
            } finally {
                this.categorySubmitting = false;
            }
        },
        logout() {
            localStorage.removeItem('admin_token');
            this.$router.push('/admin/login');
        },
        filterCategories() {
            // Computed property `filteredCategories` handles this automatically
        },
        async saveCategory(category) {
            this.$set(category, 'isSaving', true);
            try {
                const updatedData = {
                    name: category.name,
                    description: category.description,
                    image: category.image,
                    hexcolor: category.hexcolor
                };

                const res = await fetch(`${serverurl}/admin/update-category/${category._id}`, {
                    method: 'PUT',
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify(updatedData)
                });

                await handleFetchError(res);
                const data = await res.json();

                if (data.error) {
                    showErrorMessage(data.error);
                    return;
                }
                alert(`Category "${category.name}" updated successfully!`);

                const index = this.categories.findIndex(cat => cat._id === category._id);
                if (index !== -1) this.$set(this.categories, index, { ...category, isSaving: false });

                const allIndex = this.allCategories.findIndex(cat => cat._id === category._id);
                if (allIndex !== -1) this.$set(this.allCategories, allIndex, { ...category, isSaving: false });

            } catch (error) {
                console.error('Save category error:', error);
                showErrorMessage(error.message || 'Failed to save category');
            } finally {
                this.$set(category, 'isSaving', false);
            }
        },
        async deleteCategory(categoryToDelete) {
            if (!confirm(`Are you sure you want to delete the category "${categoryToDelete.name}" permanently? This cannot be undone.`)) return;

            this.$set(categoryToDelete, 'isDeleting', true);
            try {
                const res = await fetch(`${serverurl}/admin/delete-category/${categoryToDelete._id}`, {
                    method: 'DELETE',
                    headers: this.getAuthHeaders()
                });

                await handleFetchError(res);

                if (res.ok) {
                    // Remove from both lists
                    this.categories = this.categories.filter(category => category._id !== categoryToDelete._id);
                    this.allCategories = this.allCategories.filter(category => category._id !== categoryToDelete._id);
                    // Also remove from productCategories if it was linked
                    this.productCategories = this.productCategories.filter(id => id !== categoryToDelete._id);

                    alert(`Category "${categoryToDelete.name}" deleted successfully!`);
                } else {
                    showErrorMessage('Failed to delete category.');
                }
            } catch (error) {
                console.error('Delete category error:', error);
                showErrorMessage(error.message || 'Failed to delete category');
            } finally {
                this.$set(categoryToDelete, 'isDeleting', false);
            }
        },
        async removeCategoryFromProduct(categoryToRemove) {
            if (!confirm(`Are you sure you want to remove "${categoryToRemove.name}" from this product? This will NOT delete the category permanently.`)) return;

            const productId = this.$route.query.product_id;
            if (!productId) {
                showErrorMessage('No product ID found in the URL. Cannot remove category from product.');
                return;
            }

            this.$set(categoryToRemove, 'isRemoving', true); // Set loading state for this specific category
            try {
                const res = await fetch(`${serverurl}/admin/remove-category-from-product`, { // Assuming new backend route
                    method: 'POST', // Using POST for consistency with add, but DELETE is also common
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify({
                        productId: productId,
                        categoryId: categoryToRemove._id
                    })
                });

                await handleFetchError(res);
                const data = await res.json();

                if (data.error) {
                    showErrorMessage(data.error);
                } else {
                    alert(data.message);
                    // Remove from product-specific categories and productCategories array
                    this.categories = this.categories.filter(cat => cat._id !== categoryToRemove._id);
                    this.productCategories = this.productCategories.filter(id => id !== categoryToRemove._id);
                    this.closeCategoryDetails(); // Close popup if open
                }
            } catch (error) {
                console.error('Error removing category from product:', error);
                showErrorMessage(error.message || 'Failed to remove category from product.');
            } finally {
                this.$set(categoryToRemove, 'isRemoving', false);
            }
        },
        showCategoryDescription(category) {
            this.selectedCategory = category;
            this.showCategoryDetails = true;
        },
        closeCategoryDetails() {
            this.selectedCategory = null;
            this.showCategoryDetails = false;
        },
        async addCategoryToProduct(category) {
            const productId = this.$route.query.product_id;

            if (!productId) {
                showErrorMessage('No product ID found in the URL. Cannot add category.');
                this.closeCategoryDetails();
                return;
            }

            try {
                const res = await fetch(`${serverurl}/admin/add-category-to-product`, {
                    method: 'POST',
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify({
                        productId: productId,
                        categoryId: category._id
                    })
                });

                await handleFetchError(res);
                const data = await res.json();

                if (data.error) {
                    showErrorMessage(data.error);
                } else {
                    alert(data.message);
                    // Add the category to the `categories` array if it's not already there
                    // and update the `productCategories` to reflect the link
                    if (!this.categories.some(cat => cat._id === category._id)) {
                        this.categories.push({ ...category, isSaving: false, isDeleting: false, isRemoving: false });
                    }
                    if (!this.productCategories.includes(category._id)) {
                        this.productCategories.push(category._id);
                    }
                }
            } catch (error) {
                console.error('Error adding category to product:', error);
                showErrorMessage(error.message || 'Failed to add category to product.');
            } finally {
                this.closeCategoryDetails();
            }
        },
        isCategoryLinked(categoryId) {
            return this.productCategories.includes(categoryId);
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

.admin-category-dashboard {
    padding: 2rem;
    overflow-x: auto;
    background: #fff;
    min-height: 100vh;
}

.add-category-form {
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
    input[type="file"],
    input[type="text"] {
        width: 100%;
        padding: 0.8rem;
        font-size: 1.2rem;
        resize: vertical;
        border: 1px solid #ccc;
        border-radius: 0.4rem;
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

        &:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
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

.add-category-form span.loading-text {
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
        display: flex;
        align-items: center;

        & span {
            display: flex;
            align-items: center;

            & svg {
                height: 2rem;
                width: 3rem;
                cursor: pointer;
            }
        }
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

.category-table {
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

    textarea,
    input[type="text"] {
        width: 100%;
        min-height: 3rem;
        font-size: 1.2rem;
        padding: 0.4rem;
        font-family: inherit;
        resize: vertical;
        border: 1px solid #eee;
        outline: none;
    }

    button {
        margin-top: 0.3rem;
        margin-right: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        cursor: pointer;
        border: none;
        border-radius: 0.3rem;
        background: #007bff;
        color: white;

        &:last-child {
            background: #dc3545;
        }

        &:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
    }
}

.category-thumb {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 0.5rem;
}

.no-categories {
    text-align: center;
    padding: 2rem;
    font-size: 1.4rem;
    color: #666;
}

.loading-row {
    text-align: center;
    padding: 2rem;
    font-size: 1.4rem;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.category-pills-section {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    border-top: 1px solid #eee;
    padding-top: 1.5rem;
}

.view-more-button {
    padding: 0.7rem 1.5rem;
    font-size: 1.1rem;
    background: #6c757d;
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #5a6268;
    }
}

.category-pills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 1rem;
    border: 1px solid #e0e0e0;
    padding: 1rem;
    border-radius: 0.8rem;
    background-color: #f9f9f9;
}

.category-pill {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    background-color: $primary-color;
    color: white;
    font-size: 0.95rem;
    font-weight: 600;
    white-space: nowrap;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-2px);
    }
}

.no-categories-pills {
    color: #888;
    font-style: italic;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
}

.category-details-overlay {
    background: rgba(0, 0, 0, .6);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.category-details-popup {
    background: #fff;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    width: 90%;
    max-width: 500px;
    text-align: center;

    h2 {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 1.8rem;
        color: #333;
    }

    .description-text {
        font-size: 1.1rem;
        color: #555;
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }

    .button-group {
        display: flex;
        justify-content: center;
        gap: 1rem;

        button {
            padding: 0.8rem 1.5rem;
            font-size: 1.1rem;
            cursor: pointer;
            border: none;
            border-radius: 0.5rem;
            transition: background-color 0.2s ease;

            &:first-child {
                background: $primary-color;
                color: white;

                &:hover {
                    background-color: darken($primary-color, 10%);
                }
            }

            &.cancel-button {
                background: #6c757d;
                color: white;

                &:hover {
                    background-color: #5a6268;
                }
            }
        }
    }
}

.remove-button {
    background-color: #ffc107 !important;
    /* A warning/amber color */
    color: #333 !important;

    &:hover {
        background-color: darken(#ffc107, 10%) !important;
    }
}
</style>