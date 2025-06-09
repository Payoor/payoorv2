export const serverurl = (() => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname

    if (hostname.includes('payoor')) {
      return 'https://api.payoor.store' // production
    }
  }

  return 'http://localhost'
})()

console.log(serverurl)
