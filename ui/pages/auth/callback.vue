<template>
  <main style="padding:16px">
    <p>Signing you in…</p>
  </main>
</template>

<script>
export default {
  // IMPORTANT: force auth middleware on this route so it processes ?code&state
  middleware: ['auth'],
  auth: false,

  mounted() {
    // Quick visibility
    console.log('[callback] query:', this.$route.query)
    console.log('[callback] initially loggedIn:', this.$auth.loggedIn)

    const stop = this.$watch(
      () => this.$auth.loggedIn,
      (loggedIn) => {
        console.log('[callback] watch loggedIn:', loggedIn)
        if (loggedIn) {
          stop()
          this.$router.replace(this.$auth.options.redirect.home || '/')
        }
      },
      { immediate: true }
    )

    setTimeout(() => {
      console.log('[callback] token:', this.$auth.strategy.token.get())
      console.log('[callback] user:', this.$auth.user)
    }, 1500)
  }
}
</script>