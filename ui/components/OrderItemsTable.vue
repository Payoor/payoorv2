<template>
    <div>
        <div class="admintable">
            <div class="admintable__content">
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

                                    <template v-if="header.key === 'image'">
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

                                    <template v-else-if="header.key === 'productId'">
                                        <span>{{ `${item[header.key]['name']}` }}</span>
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
    </div>
</template>

<script>
import adminTable from '@/mixins/admin_table';
import { serverurl, handleFetchError, showErrorMessage } from '@/api';

export default {
    mixins: [adminTable],
}
</script>
