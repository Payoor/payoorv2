export { default as AddressList } from '../../components/AddressList.vue'
export { default as AddressesList } from '../../components/AddressesList.vue'
export { default as AdminHeader } from '../../components/AdminHeader.vue'
export { default as AdminProductsTable } from '../../components/AdminProductsTable.vue'
export { default as AdminSideNav } from '../../components/AdminSideNav.vue'
export { default as AdminUiHeader } from '../../components/AdminUiHeader.vue'
export { default as Authenticator } from '../../components/Authenticator.vue'
export { default as CartButton } from '../../components/CartButton.vue'
export { default as CategoriesTable } from '../../components/CategoriesTable.vue'
export { default as ChatBody } from '../../components/ChatBody.vue'
export { default as ChatCard } from '../../components/ChatCard.vue'
export { default as ChatCategories } from '../../components/ChatCategories.vue'
export { default as ChatHeader } from '../../components/ChatHeader.vue'
export { default as ChatInput } from '../../components/ChatInput.vue'
export { default as ChatOption } from '../../components/ChatOption.vue'
export { default as ChatOptions } from '../../components/ChatOptions.vue'
export { default as ChoosePaymentProcessor } from '../../components/ChoosePaymentProcessor.vue'
export { default as CouponsTable } from '../../components/CouponsTable.vue'
export { default as EditableItemTable } from '../../components/EditableItemTable.vue'
export { default as GoogleBtn } from '../../components/GoogleBtn.vue'
export { default as Home } from '../../components/Home.vue'
export { default as Landing } from '../../components/Landing.vue'
export { default as LandingCategories } from '../../components/LandingCategories.vue'
export { default as LandingCopy } from '../../components/LandingCopy.vue'
export { default as LandingFaq } from '../../components/LandingFaq.vue'
export { default as LandingFooter } from '../../components/LandingFooter.vue'
export { default as LandingPage } from '../../components/LandingPage.vue'
export { default as LoadingAnimation } from '../../components/LoadingAnimation.vue'
export { default as NewItemForm } from '../../components/NewItemForm.vue'
export { default as OrderDisplay } from '../../components/OrderDisplay.vue'
export { default as OrderItemsTable } from '../../components/OrderItemsTable.vue'
export { default as OrderTable } from '../../components/OrderTable.vue'
export { default as OtpInput } from '../../components/OtpInput.vue'
export { default as VariantProductsTable } from '../../components/VariantProductsTable.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
