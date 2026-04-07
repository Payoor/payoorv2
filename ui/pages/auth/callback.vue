<template>
  <main class="callback-page">
    <p>{{ statusText }}</p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      statusText: 'Signing you in...'
    }
  },

  async mounted() {
    const inflightKey = 'google_callback_inflight'
    const lastCodeKey = 'google_last_exchanged_code'

    try {
      const code = this.$route.query.code
      const state = this.$route.query.state

      const savedState = sessionStorage.getItem('google_oauth_state')
      const codeVerifier = sessionStorage.getItem('google_code_verifier')
      const lastExchangedCode = sessionStorage.getItem(lastCodeKey)

      const clientId =
        '845190882138-9pr7hgfgeidb7f90qom56r810mf7vnes.apps.googleusercontent.com'
      const redirectUri = `${window.location.origin}/auth/callback`

      console.log('callback code:', code)
      console.log('callback state:', state)
      console.log('saved state:', savedState)
      console.log('callback codeVerifier:', codeVerifier)
      console.log('callback redirectUri:', redirectUri)
      console.log('last exchanged code:', lastExchangedCode)

      if (!code) {
        throw new Error('Missing Google authorization code')
      }

      if (!state || state !== savedState) {
        throw new Error('Invalid OAuth state')
      }

      if (!codeVerifier) {
        throw new Error('Missing code_verifier')
      }

      if (sessionStorage.getItem(inflightKey) === 'true') {
        console.log('Google callback already in flight, skipping duplicate run')
        this.statusText = 'Finishing sign-in...'
        return
      }

      if (lastExchangedCode === code) {
        console.log('This Google code was already exchanged, skipping duplicate run')
        this.statusText = 'This sign-in code was already used. Please try again.'
        return
      }

      sessionStorage.setItem(inflightKey, 'true')
      sessionStorage.setItem(lastCodeKey, code)

      this.statusText = 'Exchanging Google code...'

      const tokenRes = await this.$axios.$post('/api/shopper/auth/google/token', {
        code,
        client_id: clientId,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
        code_verifier: codeVerifier
      })

      console.log('tokenRes:', tokenRes)

      const fullToken = tokenRes.access_token
      const rawToken =
        typeof fullToken === 'string' && fullToken.startsWith('Bearer ')
          ? fullToken.slice(7)
          : fullToken

      if (!rawToken) {
        throw new Error('Missing access token from backend')
      }

      this.statusText = 'Fetching user...'

      const user = await this.$axios.$get('/api/shopper/auth/google/user', {
        headers: {
          Authorization: `Bearer ${rawToken}`
        }
      })

      console.log('user:', user)

      localStorage.setItem('jwtToken', rawToken)

      await this.$store.dispatch('user/setJwtToken', rawToken)
      await this.$store.dispatch('user/addCurrentUser', user)

      sessionStorage.removeItem('google_oauth_state')
      sessionStorage.removeItem('google_code_verifier')
      sessionStorage.removeItem(inflightKey)
      sessionStorage.removeItem(lastCodeKey)

      this.statusText = 'Redirecting...'
      this.$router.replace('/')
    } catch (error) {
      console.error(
        'Google callback failed:',
        error?.response?.status,
        error?.response?.data || error
      )

      sessionStorage.removeItem(inflightKey)

      // If the code was rejected, clear PKCE state so the next login starts fresh
      if (error?.response?.data?.error === 'invalid_grant') {
        sessionStorage.removeItem('google_oauth_state')
        sessionStorage.removeItem('google_code_verifier')
      }

      this.statusText =
        error?.response?.data?.error_description ||
        error?.response?.data?.error ||
        error?.message ||
        'Google sign-in failed'
    }
  }
}
</script>

<style scoped>
.callback-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>