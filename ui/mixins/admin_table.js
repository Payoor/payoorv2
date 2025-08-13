import { serverurl, handleFetchError, showErrorMessage } from '@/api'

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
    model: { type: String },
    parentItem: { type: Object }
  },
  data () {
    return {
      dropdownOpenItemId: null,
      currentItem: null,
      editableItem: null,
      focusedItem: {},
      prevFocusedItem: null,
      localItems: [],
      newItemFormOpen: false,
      originalById: {},
      dirtyById: {}
    }
  },
  created () {
    this.localItems = JSON.parse(JSON.stringify(this.visibleItems))
  },

  computed: {
    visibleItems () {
      if (!this.currentItem) {
        return this.items
      }

      return [this.currentItem]
    }
  },

  watch: {
    focusedItem: {
      handler (newValue, oldValue) {
        if (oldValue && Object.keys(oldValue).length > 0) {
          this.prevFocusedItem = JSON.parse(JSON.stringify(oldValue))
        }

        console.log(
          'focusedItem has changed. Old value stored in prevFocusedItem:',
          this.prevFocusedItem
        )
      },
      deep: true
    },

    visibleItems (newValue) {
      this.newItemFormOpen = false
      this.localItems = JSON.parse(JSON.stringify(newValue))
    },

    newItemFormOpen (newValue) {
      if (newValue) {
        this.initializeItems(this.localItems)

        this.focusedItem = this.localItems[0]
      } else {
        this.localItems = JSON.parse(JSON.stringify(this.visibleItems))
      }
    }
  },

  methods: {
    getAuthHeaders () {
      const token = localStorage.getItem('admin_token')
      return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    },

    setCurrent (filter) {
      this.currentfilter = filter
    },

    seteditableItem (item) {
      this.editableItem = item

      console.log(this.editableItem)
    },

    toggleDropdown (item) {
      if (this.dropdownOpenItemId === item._id) {
        this.dropdownOpenItemId = null
      } else {
        this.dropdownOpenItemId = item._id
      }
    },

    closeDropdown (event) {
      this.dropdownOpenItemId = null
    },

    setFocused ({ item, inputId }) {
      this.focusedItem = item
      this.dropdownOpenItemId = null

      this.$nextTick(() => {
        const el = document.getElementById(inputId)
        if (el) el.focus()
      })

      this.ensureOriginalSnapshot(item)

      if (this.focusedItem._id !== `0`) {
        this.closeNewItemForm()
      }
    },

    openNewItemForm () {
      //this.closeItem();
      this.newItemFormOpen = true
    },

    closeNewItemForm () {
      this.newItemFormOpen = false
    },

    closeItem () {
      this.currentItem = null
      this.currentVariants = []
      this.seteditableItem(null)
      this.focusedItem = {}

      this.closeNewItemForm()
    },

    async handleImageUpload (event) {
      const file = event.target.files[0]
      if (!file) return

      const formData = new FormData()
      formData.append('image', file)
      this.imageUploading = true

      const fullId = event.target.id
      const itemId = fullId.split('-').pop()

      try {
        const response = await fetch(
          `${serverurl}/admin/upload-image?itemId=${itemId}&model=${this.model}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('admin_token')}`
            },
            body: formData
          }
        )

        await handleFetchError(response)

        const data = await response.json()

        if (data.url) {
          const itemIndex = this.localItems.findIndex(
            item => item._id === itemId
          )

          if (itemIndex !== -1) {
            const updatedItems = [...this.localItems]

            const updatedItem = { ...updatedItems[itemIndex], image: data.url }

            updatedItems[itemIndex] = updatedItem

            this.localItems = updatedItems
          }
        } else {
          showErrorMessage('Failed to upload image')
        }
      } catch (err) {
        console.error('Image upload error:', err)
        showErrorMessage(err.message || 'Image upload failed')
      } finally {
        this.imageUploading = false
      }
    },

    cloneDeep (obj) {
      return JSON.parse(JSON.stringify(obj))
    },

    ensureOriginalSnapshot (item) {
      const id = item._id
      if (!this.originalById[id]) {
        this.originalById[id] = this.cloneDeep(item)

        this.$set(this.dirtyById, id, {})
      }
    },

    isKeyDirty (id, key) {
      const map = this.dirtyById[id]
      return !!(map && map[key])
    },

    isRowDirty (id) {
      const map = this.dirtyById[id]
      return !!map && Object.keys(map).length > 0
    },

    onFieldInput (id, key) {
      const idx = this.localItems.findIndex(i => i._id === id)
      if (idx === -1) return

      const original = this.originalById[id]?.[key]
      const current = this.localItems[idx][key]
      if (!this.dirtyById[id]) this.$set(this.dirtyById, id, {})

      const equal = JSON.stringify(original) === JSON.stringify(current)

      if (!equal) {
        this.$set(this.dirtyById[id], key, true)
      } else {
        if (this.dirtyById[id][key]) this.$delete(this.dirtyById[id], key)
      }
    },

    finalizeSaveSnapshot (item) {
      const id = item._id
      this.originalById[id] = this.cloneDeep(item)
      this.$set(this.dirtyById, id, {})
    }
  }
}
