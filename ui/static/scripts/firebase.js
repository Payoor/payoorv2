;(async () => {
  if (typeof window === 'undefined') return

  const { initializeApp } = await import(
    'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js'
  );

  const {
    getAuth,
    getRedirectResult,
    signInWithRedirect,
    GoogleAuthProvider,
    onAuthStateChanged
  } = await import(
    'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js'
  )

  const firebaseConfig = {
    apiKey: 'AIzaSyDckrMDUsIhVHifFT2J004L7ninPQY3ong',
    authDomain: 'payoor-e8876.firebaseapp.com',
    projectId: 'payoor-e8876',
    storageBucket: 'payoor-e8876.firebasestorage.app',
    messagingSenderId: '32581966388',
    appId: '1:32581966388:web:d622556edb09632a27c861',
    measurementId: 'G-YFF7BS9F9D'
  }

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()

  auth.languageCode = 'en'

  // Check for redirect result
  getRedirectResult(auth)
    .then(result => {
      if (result) {
        console.log('User from redirect:', result.user)
        alert('entered')
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        if (token) console.log('Access token:', token)
      }
    })
    .catch(error => {
      console.error('Redirect error:', error)
    })

  // Listen for auth changes
  onAuthStateChanged(auth, async user => {
    if (user) {
      console.log('User signed in:', user.email)
      const idToken = await user.getIdToken()
      console.log('ID token:', idToken)
    } else {
      console.log('User signed out')
    }
  })

  // Login button
  const loginBtn = document.getElementById('login-with-google')
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      signInWithRedirect(auth, provider)
    })
  }
})()
