window.addEventListener('load', function () {
  const body = document.querySelector('body')
  body.style.display = 'block'
});

const matomoUrl = (() => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname

    if (hostname.includes('payoor')) {
      return 'https://clientanalytics.payoor.store/'
    }
  }

  return 'http://localhost:8080/'
})()

var _paq = (window._paq = window._paq || [])
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView'])
_paq.push(['enableLinkTracking'])
_paq.push(['setTrackerUrl', matomoUrl + 'matomo.php'])
_paq.push(['setSiteId', '1'])

;(function () {
  var d = document,
    g = d.createElement('script'),
    s = d.getElementsByTagName('script')[0]
  g.async = true
  g.src = matomoUrl + 'matomo.js'
  s.parentNode.insertBefore(g, s)
})()


