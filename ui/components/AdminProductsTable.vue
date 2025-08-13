<template>
    <div class="admintable">

        <div class="admintable__content">

            <div class="admintable__headerarea">
                <div class="admintable__headerarea--section">
                    <!--<span class="admintable__headerarea--backbutton">
                        <svg data-v-7f082eaa="">
                            <use data-v-7f082eaa="" xlink:href="/svg/symbol-defs.svg#icon-arrow_back"></use>
                        </svg>
                    </span>-->
                    <h1 class="admintable__h1">{{ tableName }}</h1>
                </div>

                <div class="admintable__headerarea--section" v-if="!currentItem">
                    <button class="newitem" @click="openNewItemForm">New Item</button>
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

                                            <button v-if="focusedItem._id === item._id"
                                                class="admintable__actions--savebtn cancel"
                                                @click="closeItem">Cancel</button>

                                            <!--<button v-if="item._id === `0`" class="admintable__actions--savebtn cancel"
                                                @click="closeNewItemForm">Cancel</button>-->

                                            <button
                                                v-if="(focusedItem._id === item._id && item._id !== '0' && isRowDirty(item._id))"
                                                class="admintable__actions--savebtn save" @click="saveItem(item)">
                                                Save
                                            </button>

                                            <button
                                                v-if="focusedItem._id === item._id && item._id === `0` && item.image && item.name && item.metadata"
                                                class="admintable__actions--savebtn save"
                                                @click="saveNewItemToDB(item)">Save</button>

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

                                    <template v-else-if="header.key === 'image'">
                                        <figure class="admintable__content--img">
                                            <label :for="'image-upload-' + item._id">
                                                <img width="30" height="30"
                                                    :src="item.image ? item.image : '/imgs/cartlogo.png'"
                                                    :alt="item.name">
                                            </label>
                                            <input :id="'image-upload-' + item._id" type="file"
                                                @change="handleImageUpload" accept="image/*" style="display: none;">
                                        </figure>
                                    </template>

                                    <template v-else-if="['createdAt', 'updatedAt'].includes(header.key)">
                                        <span>{{ new Date(item[header.key]).toLocaleString() }}</span>
                                    </template>

                                    <template v-else-if="['variantCount'].includes(header.key)">
                                        <span>{{ `${item[header.key]}` }}</span>
                                    </template>

                                    <template v-else-if="item._id === '0'">
                                        <input type="text" class="table-input"
                                            @focus="setFocused({ item, inputId: `${header.key}-${item._id}` })"
                                            :id="`${header.key}-${item._id}`" :class="{
                                                first: header.key === 'name' || header.key === 'unit',
                                                dirty: isKeyDirty(item._id, header.key)
                                            }" :placeholder="header.key" v-model="item[header.key]"
                                            @input="onFieldInput(item._id, header.key)" />
                                    </template>

                                    <template v-else>
                                        <input type="text" class="table-input" :disabled="currentItem"
                                            @focus="setFocused({ item, inputId: `${header.key}-${item._id}` })"
                                            :id="`${header.key}-${item._id}`" :class="{
                                                first: header.key === 'name' || header.key === 'unit',
                                                dirty: isKeyDirty(item._id, header.key)
                                            }" v-model="item[header.key]"
                                            @input="onFieldInput(item._id, header.key)" />
                                    </template>


                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>

        <div v-if="currentItem">
            <VariantProductsTable :headers="variantHeaders" :items="currentVariants" :tableName="`variants`"
                :model="'ProductVariant'" :parentItem="currentItem" />

            <EditableItemTable :tableName="`Edit ${editableItem ? editableItem.name : ''}`" :headers="headers"
                :editableItem="editableItem" :items="[]" :parentItem="currentItem" />
        </div>

        <div v-if="!currentItem">
            <div class="admintable__pagination" v-if="hasPagination">
                <button class="admintable__pagination--button" @click="$emit('prev-page')"
                    :disabled="currentPage === 1">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 192 512" height="1em"
                        width="1em" xmlns="http://www.w3.org/2000/svg">
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
</template>

<script>
import adminTable from '@/mixins/admin_table';
import { serverurl, handleFetchError, showErrorMessage } from '@/api'

export default {
    mixins: [adminTable],
    data() {
        return {
            currentfilter: 'All',
            variantHeaders: [
                { text: 'Image', key: 'image', class: 'fixed-column' },
                //{ text: 'Product ID', key: 'productId', class: 'fixed-column asset-column' },
                { text: 'Unit', key: 'unit' },
                { text: 'Price', key: 'price' },
                { text: 'Availability', key: 'availability' },
                { text: 'Created At', key: 'createdAt' },
                { text: 'Updated At', key: 'updatedAt' },
                { text: 'Actions', key: 'actions' },
            ],
            currentVariants: []
        }
    },
    methods: {
        async fetchProductVariants(product_id) {
            this.currentItem = this.localItems.find(product => product._id === product_id);
            this.currentVariants = this.currentItem.variants;

            console.log(this.currentVariants)
            this.closeDropdown();
        },
        viewItem(item) {
            console.log(item, 'item here')
            this.fetchProductVariants(item._id);
            this.seteditableItem(item)
        },

        saveItem(itemToSave) {
            const updatedItem = this.localItems.find(
                item => item._id === itemToSave._id
            )

            this.saveItemToDB(updatedItem)
        },

        async saveItemToDB(itemToSave) {
            try {
                const res = await fetch(`${serverurl}/admin/update-product/${itemToSave._id}`, {
                    method: 'PUT',
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify(itemToSave)
                })
                await handleFetchError(res)

                this.finalizeSaveSnapshot(itemToSave)
                this.focusedItem = {}
            } catch (error) {
                console.error('Update error:', error)
            }
        },

        async saveNewItemToDB(item) {
            try {
                const res = await fetch(`${serverurl}/admin/create-product`, {
                    method: 'POST',
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify(item)
                })
                await handleFetchError(res)
                const { product } = await res.json()

                const localItems = [...this.localItems]
                localItems[0] = product
                this.localItems = localItems

                this.finalizeSaveSnapshot(product)
                this.currentItem = null
                this.currentVariants = []
                this.seteditableItem(null)
                this.focusedItem = {}
            } catch (error) {
                console.error('Add product error:', error)
            }
        },

        async deleteProduct(itemId) {
            if (!confirm('Are you sure you want to delete this product and its variants?')) return;

            try {
                const res = await fetch(`${serverurl}/admin/delete-product/${itemId}`, {
                    method: 'DELETE',
                    headers: this.getAuthHeaders()
                });

                await handleFetchError(res)

                if (res.ok) {
                    this.localItems = this.localItems.filter(item => item._id !== itemId);
                    // showSuccessMessage('Product and variants deleted successfully!');
                } else {
                    showErrorMessage('Failed to delete product. Please try again.');
                }
            } catch (error) {
                console.error('Delete product error:', error);
            }
        },

        initializeItems(newValue) {
            let itemsWithNew = [...JSON.parse(JSON.stringify(newValue))];

            if (itemsWithNew.length > 0 && !this.currentItem) {
                const templateItem = itemsWithNew[0];
                const newItem = Object.keys(templateItem).reduce((acc, key) => {
                    if (key === '_id') {
                        acc[key] = `0`;
                    } else if (key === 'image') {
                        acc[key] = null;
                    } else if (key === 'variantCount') {
                        acc[key] = 0;
                    } else if (['createdAt', 'updatedAt'].includes(key)) {
                        acc[key] = new Date().toISOString();
                    } else if (key === 'variants') {
                        acc[key] = [];
                    } else {
                        acc[key] = '';
                    }
                    return acc;
                }, {});

                itemsWithNew.unshift(newItem);
            }

            const seenIds = new Set();
            const uniqueItems = itemsWithNew.filter(item => {
                const isDuplicate = seenIds.has(item._id);
                seenIds.add(item._id);
                return !isDuplicate;
            });

            this.localItems = uniqueItems;
        }
    },

    computed: {}
}
</script>