<template>
    <div>
        <div class="admintable__content">
            <div class="admintable__headerarea">
                <div class="admintable__headerarea--section">
                    <span class="admintable__headerarea--backbutton" v-if="backFunction">
                        <svg data-v-7f082eaa="">
                            <use data-v-7f082eaa="" xlink:href="/svg/symbol-defs.svg#icon-arrow_back"></use>
                        </svg>
                    </span>
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
                        <template v-for="(item, itemIndex) in localItems" :key="itemIndex">
                            <tr>
                                <td v-for="(header, headerIndex) in headers" :key="headerIndex" :class="header.class">
                                    <div>
                                        <template v-if="header.key === 'actions'">
                                            <div class="admintable__actions">
                                                <button v-if="focusedItem._id === item._id"
                                                    class="admintable__actions--savebtn cancel" @click="closeItem">
                                                    Cancel
                                                </button>

                                                <button
                                                    v-if="(focusedItem._id === item._id && item._id !== '0' && isRowDirty(item._id)) || currentItem"
                                                    class="admintable__actions--savebtn save" @click="saveItem(item)">
                                                    Save
                                                </button>

                                                <button
                                                    v-if="focusedItem._id === item._id && item._id === `0` && item.image && item.unit && item.price && item.availability"
                                                    class="admintable__actions--savebtn save"
                                                    @click="saveNewItemToDB(item)">Save</button>

                                                <button class="admintable__actions--savebtn delete"
                                                    v-if="focusedItem._id !== item._id"
                                                    @click.stop="deleteItem(item._id)">
                                                    Delete
                                                </button>
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

                                        <template v-else-if="item._id === '0'">
                                            <input type="text" class="table-input"
                                                @focus="setFocused({ item, inputId: `${header.key}-${item._id}` })"
                                                :class="{
                                                    first: header.key === 'name' || header.key === 'unit',
                                                    dirty: isKeyDirty(item._id, header.key)
                                                }" :placeholder="header.key" v-model="item[header.key]"
                                                @input="onFieldInput(item._id, header.key)" />
                                        </template>

                                        <template v-else>
                                            <input type="text" class="table-input"
                                                @focus="setFocused({ item, inputId: `${header.key}-${item._id}` })"
                                                :class="{
                                                    first: header.key === 'name' || header.key === 'unit',
                                                    dirty: isKeyDirty(item._id, header.key)
                                                }" v-model="item[header.key]"
                                                @input="onFieldInput(item._id, header.key)" />
                                        </template>


                                    </div>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import adminTable from '@/mixins/admin_table';
import { serverurl, handleFetchError, showErrorMessage } from '@/api';

export default {
    mixins: [adminTable],
    methods: {
        initializeItems(newValue) {
            let itemsWithNew = [...JSON.parse(JSON.stringify(newValue))];

            if (itemsWithNew.length > 0 && !this.currentItem) {
                const templateItem = itemsWithNew[0];
                const newItem = Object.keys(templateItem).reduce((acc, key) => {
                    if (key === '_id') {
                        acc[key] = `0`;
                    } else if (key === 'image') {
                        acc[key] = null;
                    } else if (key === 'price') {
                        acc[key] = 0;
                    } else if (key === 'availability') {
                        acc[key] = 'YES';
                    } else if (key === 'productId') {
                        acc[key] = this.parentItem._id;
                        console.log('fond the prif', this.parentItem)
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
        },
        async deleteItem(itemId) {
            if (!confirm('Are you sure you want to delete this variant?')) return;

            try {
                const res = await fetch(`${serverurl}/admin/delete-variant/${itemId}`, {
                    method: 'DELETE',
                    headers: this.getAuthHeaders()
                });

                await handleFetchError(res);

                if (res.ok) {
                    this.localItems = this.localItems.filter(item => item._id !== itemId);

                    if (this.focusedItem && this.focusedItem._id === itemId) {
                        this.focusedItem = {};
                    }

                    if (this.originalById && this.originalById[itemId]) {
                        delete this.originalById[itemId];
                    }
                    if (this.dirtyById && this.dirtyById[itemId]) {
                        if (this.$delete) this.$delete(this.dirtyById, itemId);
                        else delete this.dirtyById[itemId];
                    }
                } else {
                    showErrorMessage('Failed to delete variant. Please try again.');
                }
            } catch (error) {
                console.error('Delete variant error:', error);
                showErrorMessage(error.message || 'Failed to delete variant');
            }
        },

        saveItem(itemToSave) {
            const updatedItem = this.localItems.find(
                item => item._id === itemToSave._id
            );
            console.log(updatedItem);
            this.saveItemToDB(updatedItem);
        },
        async saveItemToDB(itemToSave) {
            try {
                const res = await fetch(`${serverurl}/admin/update-variant/${itemToSave._id}`, {
                    method: 'PUT',
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify(itemToSave)
                });
                await handleFetchError(res);
                this.focusedItem = {};
            } catch (error) {
                console.error('Update error:', error);
            }
        },

        async saveNewItemToDB() {
            try {
                const draft =
                    this.localItems.find(i => i._id === '0') || this.localItems[0] || {}

                const productId =
                    this.productId || draft.productId || (this.editableItem && this.editableItem._id);

                console.log(productId, 'productId')

                if (!productId) {
                    throw new Error('Missing productId for add-variant request')
                }

                const payload = {
                    unit: draft.unit,
                    price: draft.price,
                    availability: draft.availability,
                    image: draft.image
                }

                if (!payload.unit || !payload.price || !payload.availability || !payload.image) {
                    throw new Error('All fields are required: unit, price, availability, image')
                }

                const res = await fetch(`${serverurl}/admin/add-variant/${productId}`, {
                    method: 'POST',
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify(payload)
                })
                await handleFetchError(res)

                const { variant } = await res.json()
                const next = [...this.localItems]
                const idx = next.findIndex(i => i._id === '0')
                if (idx !== -1) next[idx] = variant
                else next.unshift(variant)
                this.localItems = next

                this.finalizeSaveSnapshot(variant)
                this.focusedItem = {}
                this.newItemFormOpen = false;
            } catch (error) {
                console.error('Add product error:', error)
                showErrorMessage(error.message || 'Failed to add variant')
            }
        }


    },
};
</script>
