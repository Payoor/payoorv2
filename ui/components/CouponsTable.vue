<template>
    <div>
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
                                                    <svg xmlns="http://www.w3.org/2003/svg" width="24" height="24"
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

                                                <button
                                                    v-if="focusedItem._id === item._id && item._id === `0` && item.name && (item.percentageOff || item.deliveryAmountOff)"
                                                    class="admintable__actions--savebtn save"
                                                    @click="saveNewItemToDB(item)">Save</button>

                                                <button
                                                    v-if="(focusedItem._id === item._id && item._id !== '0' && isRowDirty(item._id))"
                                                    class="admintable__actions--savebtn save" @click="saveItem(item)">
                                                    Save
                                                </button>

                                                <button v-if="currentItem" class="admintable__actions--savebtn close"
                                                    @click="closeItem">Close</button>

                                                <div class="admintable__actions--dropdown"
                                                    v-if="dropdownOpenItemId === item._id">
                                                    <button @click.stop="viewItem(item)">View
                                                        Item</button>
                                                    <button @click.stop="deleteCoupon(item._id)">Delete</button>
                                                </div>
                                            </div>
                                        </template>

                                        <template v-else-if="header.key === 'index'">
                                            <span>{{ `${itemIndex + 1}` }}</span>
                                        </template>

                                        <template
                                            v-else-if="['createdAt', 'updatedAt', 'expiresAt'].includes(header.key)">
                                            <input type="date" class="table-input" :disabled="currentItem"
                                                @focus="setFocused({ item, inputId: `${header.key}-${item._id}` })"
                                                :id="`${header.key}-${item._id}`" :class="{
                                                    dirty: isKeyDirty(item._id, header.key)
                                                }" :value="formatDateForInput(item[header.key])"
                                                @input="onDateInput(item._id, header.key, $event)" />
                                        </template>

                                        <template v-else-if="header.key === 'code' && item._id === '0'">
                                            <span>C774D11Code</span>
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
                    } else if (key === 'affiliatePercentage') {
                        acc[key] = `0`;
                    } else if (key === 'percentageOff') {
                        acc[key] = `0`;
                    } else if (key === 'deliveryAmountOff') {
                        acc[key] = `0`;
                    } else if (['createdAt', 'updatedAt', 'expiresAt'].includes(key)) {
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
        saveItem(itemToSave) {
            const updatedItem = this.localItems.find(
                item => item._id === itemToSave._id
            );
            this.saveItemToDB(updatedItem);
        },
        async saveItemToDB(itemToSave) {
            try {
                const res = await fetch(`${serverurl}/admin/coupons/${itemToSave._id}`, {
                    method: 'PUT',
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify(itemToSave)
                });

                await handleFetchError(res);

                this.finalizeSaveSnapshot(itemToSave);
                this.focusedItem = {};
            } catch (error) {
                console.error('Update coupon error:', error);
                showErrorMessage && showErrorMessage(error.message || 'Failed to update coupon.');
            }
        },
        async saveNewItemToDB(item) {
            try {
                const res = await fetch(`${serverurl}/admin/coupons`, {
                    method: 'POST',
                    headers: this.getAuthHeaders(),
                    body: JSON.stringify(item)
                });

                await handleFetchError(res);
                const { coupon } = await res.json();

                // Update the local data with the new coupon
                const localItems = [...this.localItems];
                localItems[0] = coupon;
                this.localItems = localItems;

                this.finalizeSaveSnapshot(coupon);
                this.currentItem = null;
                this.seteditableItem(null);
                this.focusedItem = {};
            } catch (error) {
                console.error('Add coupon error:', error);
                showErrorMessage && showErrorMessage(error.message || 'Failed to add coupon.');
            }
        },
        async deleteCoupon(itemId) {
            if (!confirm('Are you sure you want to delete this coupon?')) return;

            try {
                const res = await fetch(`${serverurl}/admin/coupons/${itemId}`, {
                    method: 'DELETE',
                    headers: this.getAuthHeaders()
                });

                await handleFetchError(res);

                if (res.ok) {
                    this.localItems = this.localItems.filter(item => item._id !== itemId);
                    // showSuccessMessage('Coupon deleted successfully!');
                } else {
                    showErrorMessage('Failed to delete coupon. Please try again.');
                }
            } catch (error) {
                console.error('Delete coupon error:', error);
                showErrorMessage && showErrorMessage(error.message || 'Failed to delete coupon.');
            }
        },
    }
}
</script>
