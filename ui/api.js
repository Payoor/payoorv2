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
      console.log(e)
      console.log(errorData, 'error data herer')
      errorData = {
        userMessage: 'Unknown error',
        raw: await response.text()
      }
    }

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

export async function handleFetch ({
  apiroute,
  queries = {},
  body,
  method = 'GET',
  auth = false
}) {
  try {
    let url = `${serverurl}/${apiroute}`
    const token = localStorage.getItem('jwt')

    if (!token && !auth) return;

    const options = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Origin: window.location.origin,
        'Access-Control-Request-Method': method,
        'Access-Control-Request-Headers': 'Content-Type'
      }
    }

    if (queries) {
      const queryString = new URLSearchParams(queries).toString()
      url = `${url}?${queryString}`.trim()
    }

    if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
      options.body = JSON.stringify(body)
    }

    console.log(url, options)

    const response = await fetch(url, options)

    await handleFetchError(response)

    if (response.status === 200 || response.status === 201) {
      const data = await response.json()

      console.log(data, 'data in api now')

      return data
    }
  } catch (error) {
    throw error
  }
}

export async function handleFetchDebug ({
  apiroute,
  queries = {},
  body,
  method = 'GET'
}) {
  try {
    let url = `${serverurl}/${apiroute}`
    const token = localStorage.getItem('jwt')

    const options = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Origin: window.location.origin,
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type'
      }
    }

    if (queries) {
      const queryString = new URLSearchParams(queries).toString()
      url = `${url}?${queryString}`.trim()
    }

    if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
      options.body = JSON.stringify(body)
    }

    console.log(url, options, body, JSON.stringify(body))

    const response = await fetch(url, options)

    await handleFetchError(response)

    if (response.status === 200 || response.status === 201) {
      const data = await response.json()

      return data
    }
  } catch (error) {
    throw error
  }
}

export function handleErrorThrow (error) {}
