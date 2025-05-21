<template>
    <div class="redirecting">
      <p>Signing you in with Google...</p>
    </div>
  </template>
  
  <script>
  import { serverurl } from '@/api'
  
  export default {
    mounted() {
      this.initGoogleRedirectFlow();
    },
    methods: {
      initGoogleRedirectFlow() {
        if (!window.google || !window.google.accounts) {
          console.error("Google Identity Services not loaded");
          return;
        }

        window.google.accounts.id.initialize({
          client_id: "845190882138-9pr7hgfgeidb7f90qom56r810mf7vnes.apps.googleusercontent.com",
          callback: this.handleCredentialResponse,
        });
  
        // Auto-handles credential from URL fragment and triggers callback
        window.google.accounts.id.prompt();
      },
      parseJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
      },
  
      async handleCredentialResponse(response) {
        if (!response.credential) {
          console.error("No credential received in redirect response.");
          return;
        }

        console.log(response, 'check here');
  
        /*const token = response.credential;
        console.log(token, 'token')
        /*const decoded = this.parseJwt(token);
        const { email, sub: googleId, picture } = decoded;

        console.log(email, googleId, picture)
  
        /*try {
          const res = await fetch(`${serverurl}/shopper/auth/google`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, googleId, picture }),
          });
  
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          const data = await res.json();
  
          if (data.user.token) {
            localStorage.setItem('token', data.user.token);
            this.$router.replace('/'); // Redirect to homepage or dashboard
          }
        } catch (error) {
          console.error("Google Sign-In Failed:", error.message);
        }*/
      }
    }
  };
  </script>
  
  <style scoped>
  .redirecting {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1.2rem;
  }
  </style>
  