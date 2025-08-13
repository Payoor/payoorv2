<template>
    <div>
        <div class="editabletable">
            <div class="admintable__content">

                


                <div class="admintable__table-wrapper">


                    <!--<div class="admintable__editinputimgarea">
                        <figure class="admintable__content--img" v-if="editableItem">
                            <label for="image-upload">
                                <img :src="editableItem.image" width="30" height="30" alt="Item Image">
                            </label>
                            <input id="image-upload" type="file" @change="handleImageUpload($event, item)"
                                accept="image/*" style="display: none;">
                        </figure>
                    </div>

                    <table class="admintable__table">
                        <tbody class="admintable__tableb">
                            <tr>
                                <template v-for="(header, headerIndex) in headers">
                                    <td v-if="!['image', 'createdAt', 'updatedAt', 'variantCount', 'actions'].includes(header.key)"
                                        :key="headerIndex" :class="header.class">
                                        <div>
                                            <div v-if="header.key === 'name'" class="admintable__editinputarea">
                                                <input v-model="formData[header.key]" />
                                                <label>{{ header.text }}</label>
                                            </div>

                                            <div v-else class="admintable__editinputarea">
                                                <input v-model="formData[header.key]" />
                                                <label>{{ header.text }}</label>
                                            </div>

                                        </div>
                                    </td>
                                </template>

<td>
    <div class="admintable__actions">
        <button class="admintable__actions--savebtn" @click="saveToDB">Save</button>
    </div>
</td>
</tr>
</tbody>
</table>-->

                    <div class="admintable__editinputarea">
                        <textarea v-model="formData['description']" style="min-height: 200px;"></textarea>
                        <label>Product Description</label>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tableName: { type: String },
        headers: { type: Array, required: true },
        items: { type: Array, required: true },
        filters: { type: Array, default: () => [] },
        hasPagination: { type: Boolean, default: false },
        currentPage: { type: Number, default: 1 },
        totalPages: { type: Number, default: 1 },
        backFunction: { type: Function },
        editableItem: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            formData: {
                description: '',
                name: '',
                metadata: ''
            }
        }
    },
    mounted() {
        console.log(this.editableItem, 'hello fro t')
    },
    watch: {
        editableItem(newVal) {
            if (newVal) {
                console.log(this.editableItem, 'hello fro t')
                const { metadata, name } = this.editableItem;

                const formData = {
                    metadata,
                    name,
                    description: ''
                }

                this.formData = formData;
            }
        }
    },
    methods: {
        saveToDB() {
            console.log(this.formData)
        }
    }
}
</script>