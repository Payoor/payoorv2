export { default as Authenticator } from '../../components/Authenticator.vue'
export { default as CartButton } from '../../components/CartButton.vue'
export { default as ChatBody } from '../../components/ChatBody.vue'
export { default as ChatCard } from '../../components/ChatCard.vue'
export { default as ChatCategories } from '../../components/ChatCategories.vue'
export { default as ChatHeader } from '../../components/ChatHeader.vue'
export { default as ChatInput } from '../../components/ChatInput.vue'
export { default as ChatOption } from '../../components/ChatOption.vue'
export { default as ChatOptions } from '../../components/ChatOptions.vue'
export { default as GoogleBtn } from '../../components/GoogleBtn.vue'
export { default as Landing } from '../../components/Landing.vue'
export { default as LandingCategories } from '../../components/LandingCategories.vue'
export { default as LandingCopy } from '../../components/LandingCopy.vue'
export { default as LandingFaq } from '../../components/LandingFaq.vue'
export { default as LandingFooter } from '../../components/LandingFooter.vue'
export { default as OtpInput } from '../../components/OtpInput.vue'

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
