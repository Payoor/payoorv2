export function randomString (length = 64) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
  const array = new Uint8Array(length)
  window.crypto.getRandomValues(array)

  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars[array[i] % chars.length]
  }

  return result
}

export async function sha256ToBase64Url (str) {
  const encoder = new TextEncoder()
  const data = encoder.encode(str)
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', data)
  const bytes = new Uint8Array(hashBuffer)

  let binary = ''
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }

  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export async function startGoogleLogin () {
  sessionStorage.removeItem('google_oauth_state')
  sessionStorage.removeItem('google_code_verifier')
  sessionStorage.removeItem('google_callback_inflight')
  sessionStorage.removeItem('google_last_exchanged_code')

  const clientId =
    '845190882138-9pr7hgfgeidb7f90qom56r810mf7vnes.apps.googleusercontent.com'

  const redirectUri = `${window.location.origin}/auth/callback`
  const state = randomString(24)
  const codeVerifier = randomString(64)
  const codeChallenge = await sha256ToBase64Url(codeVerifier)

  sessionStorage.setItem('google_oauth_state', state)
  sessionStorage.setItem('google_code_verifier', codeVerifier)

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    state,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
    prompt: 'consent'
  })

  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
}
