<template>
  <main style="padding:16px">
    <p>Signing you in, buddy…</p>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  middleware: ['auth'],
  auth: false,

  mounted() {
    setTimeout(() => {
      const fullToken = this.$auth.strategy.token.get()
      const rawToken = fullToken?.replace(/^Bearer\s+/i, '')
      const user = this.$auth.user

      console.log('loggedIn:', this.$auth.loggedIn)
      console.log('full token:', fullToken)
      console.log('raw token:', rawToken)
      console.log('user:', user)

      this.$store.dispatch('user/setJwtToken', rawToken)
      this.$store.dispatch('user/addCurrentUser', user)

      if (this.$auth.loggedIn) {
        this.$router.replace('/')
      }
    }, 1000)
  }
}
</script>