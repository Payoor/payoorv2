export const AddressList = () => import('../../components/AddressList.vue' /* webpackChunkName: "components/address-list" */).then(c => wrapFunctional(c.default || c))
export const Authenticator = () => import('../../components/Authenticator.vue' /* webpackChunkName: "components/authenticator" */).then(c => wrapFunctional(c.default || c))
export const CartButton = () => import('../../components/CartButton.vue' /* webpackChunkName: "components/cart-button" */).then(c => wrapFunctional(c.default || c))
export const ChatBody = () => import('../../components/ChatBody.vue' /* webpackChunkName: "components/chat-body" */).then(c => wrapFunctional(c.default || c))
export const ChatCard = () => import('../../components/ChatCard.vue' /* webpackChunkName: "components/chat-card" */).then(c => wrapFunctional(c.default || c))
export const ChatCategories = () => import('../../components/ChatCategories.vue' /* webpackChunkName: "components/chat-categories" */).then(c => wrapFunctional(c.default || c))
export const ChatHeader = () => import('../../components/ChatHeader.vue' /* webpackChunkName: "components/chat-header" */).then(c => wrapFunctional(c.default || c))
export const ChatInput = () => import('../../components/ChatInput.vue' /* webpackChunkName: "components/chat-input" */).then(c => wrapFunctional(c.default || c))
export const ChatOption = () => import('../../components/ChatOption.vue' /* webpackChunkName: "components/chat-option" */).then(c => wrapFunctional(c.default || c))
export const ChatOptions = () => import('../../components/ChatOptions.vue' /* webpackChunkName: "components/chat-options" */).then(c => wrapFunctional(c.default || c))
export const GoogleBtn = () => import('../../components/GoogleBtn.vue' /* webpackChunkName: "components/google-btn" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../../components/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const Landing = () => import('../../components/Landing.vue' /* webpackChunkName: "components/landing" */).then(c => wrapFunctional(c.default || c))
export const LandingCategories = () => import('../../components/LandingCategories.vue' /* webpackChunkName: "components/landing-categories" */).then(c => wrapFunctional(c.default || c))
export const LandingCopy = () => import('../../components/LandingCopy.vue' /* webpackChunkName: "components/landing-copy" */).then(c => wrapFunctional(c.default || c))
export const LandingFaq = () => import('../../components/LandingFaq.vue' /* webpackChunkName: "components/landing-faq" */).then(c => wrapFunctional(c.default || c))
export const LandingFooter = () => import('../../components/LandingFooter.vue' /* webpackChunkName: "components/landing-footer" */).then(c => wrapFunctional(c.default || c))
export const LandingPage = () => import('../../components/LandingPage.vue' /* webpackChunkName: "components/landing-page" */).then(c => wrapFunctional(c.default || c))
export const LoadingAnimation = () => import('../../components/LoadingAnimation.vue' /* webpackChunkName: "components/loading-animation" */).then(c => wrapFunctional(c.default || c))
export const OrderDisplay = () => import('../../components/OrderDisplay.vue' /* webpackChunkName: "components/order-display" */).then(c => wrapFunctional(c.default || c))
export const OtpInput = () => import('../../components/OtpInput.vue' /* webpackChunkName: "components/otp-input" */).then(c => wrapFunctional(c.default || c))

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
