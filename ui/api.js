export const serverurl = (() => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname

    if (hostname.includes('payoor')) {
      return 'https://api.payoor.store'
    }
  }

  return 'http://localhost'
})()

export async function handleFetchError (response) {
  if (!response.ok) {
    let errorData

    try {
      errorData = await response.json()
    } catch (e) {
      errorData = {
        userMessage: 'Unknown error',
        raw: await response.text()
      }
    }

    //console.error('Error response:', errorData)

    const errorMessage = errorData.userMessage || 'Unknown error'

    if (errorMessage.includes('jwt malformed')) {
      console.warn(
        'JWT malformed error detected. Redirecting to specified route with original query strings.'
      )

      const currentQueryString = window.location.search

      const baseRedirectRoute = '/'

      const newRedirectUrl = baseRedirectRoute + currentQueryString

      window.location.replace(newRedirectUrl)

      return
    }

    showErrorMessage(errorMessage)

    const error = new Error(
      `Request failed with status ${response.status}: ${errorMessage}`
    )

    error.status = response.status
    error.message = errorMessage
    error.details = errorData

    throw error
  }

  return response
}

export function showErrorMessage (message) {
  const existing = document.querySelector('.error-message')

  if (existing) {
    existing.remove()
  }

  const div = document.createElement('div')
  div.className = 'error-message'
  div.textContent = message

  const bar = document.createElement('div')
  bar.className = 'error-message-timeout-bar'
  div.appendChild(bar)

  document.body.prepend(div)

  requestAnimationFrame(() => {
    bar.style.width = '0%'
  })

  setTimeout(() => {
    div.remove()
  }, 3000)
}
