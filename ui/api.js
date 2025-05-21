export const serverurl = (() => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname

    if (hostname.includes('payoor')) {
      return 'https://api.payoor.store' // production
    }
  }

  return 'http://localhost'
})()

export const googlecallback_url = (() => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname

    if (hostname.includes('payoor')) {
      return 'https://shop.payoor.store/auth/googlecallback' // production
    }
  }

  return 'https://shop.payoor.store/auth/googlecallback' // production
})()
