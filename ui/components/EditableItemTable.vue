<template>
    <div>
        <div class="editabletable">
            <div class="admintable__content">
                <div class="admintable__table-wrapper">
                    <div class="admintable__editinputarea textarea-wrap">
                        <textarea v-model="formData.description" class="textarea" style="min-height: 200px;"></textarea>
                        <label>Product Description</label>

                        <transition name="slide-up">
                            <button v-if="showCta" class="textarea-cta" type="button" :disabled="saving"
                                @click="saveItemDescription" aria-label="Save description">
                                {{ saving ? 'Saving…' : 'Save' }}
                            </button>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { serverurl, handleFetchError, showErrorMessage } from '@/api'

export default {
    emits: ['save'],
    props: {
        editableItem: { type: Object, default: () => ({}) },
        parentItem: { type: Object, required: true }
    },
    data() {
        return {
            saving: false,
            formData: { description: '' }
        }
    },
    computed: {
        showCta() {
            return (this.formData.description || '').length > 10
        }
    },
    methods: {
        getAuthHeaders() {
            const token = localStorage.getItem('admin_token')
            return {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        },

        async fetchItemDescription() {
            if (!this.parentItem || !this.parentItem._id) return
            try {
                const res = await fetch(
                    `${serverurl}/admin/product/description?id=${encodeURIComponent(this.parentItem._id)}`,
                    {
                        method: 'GET',
                        headers: this.getAuthHeaders()
                    }
                )

                await handleFetchError(res)

                const data = await res.json()
                const desc = data?.description ?? ''
                this.formData.description = typeof desc === 'string' ? desc : ''
            } catch (error) {
                console.error('Fetch description error:', error)
                showErrorMessage?.('Failed to load description')
            }
        },


        async saveItemDescription() {
            if (!this.parentItem || !this.parentItem._id) {
                showErrorMessage?.('Missing parent item ID')
                return
            }
            const description = (this.formData.description || '').trim()
            if (description.length <= 10) return

            this.saving = true
            try {
                const res = await fetch(
                    `${serverurl}/admin/product/update/description?id=${encodeURIComponent(this.parentItem._id)}`,
                    {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ description })
                    }
                )

                if (!res.ok) {
                    await handleFetchError(res)
                    return
                }

                const data = await res.json()
                //this.$emit('save', description)
                // optional toast: this.$toast?.success('Description saved')
            } catch (err) {
                console.error(err)
                showErrorMessage?.('Failed to save description')
            } finally {
                this.saving = false
            }
        }
    },
    created() {
        this.fetchItemDescription()
    },
    watch: {
        // if parentItem changes later, refetch
        parentItem: {
            deep: true,
            handler() {
                this.fetchItemDescription()
            }
        },
        // keep compatibility with editableItem if you still preload from it
        editableItem: {
            immediate: true,
            handler(newVal) {
                if (newVal && newVal.description) {
                    this.formData.description = newVal.description
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.textarea-wrap {
    position: relative;
}

.textarea {
    width: 100%;
    box-sizing: border-box;
    padding-right: 72px;
}

.textarea-cta {
    position: absolute;
    right: 10px;
    bottom: 3rem;
    padding: 8px 12px;
    border: none;
    border-radius: 999px;
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 6px 16px rgba(0, 0, 0, .15);
    background: $primary-color;
    color: $white;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: opacity .2s ease, transform .2s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
    opacity: 0;
    transform: translateY(8px);
}
</style>