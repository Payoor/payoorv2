<template>
  <div class="google-btn">
    <div id="g_id_onload" :data-client_id="clientId" data-context="signin" data-ux_mode="popup"
      data-callback="handleCredentialResponse" data-auto_prompt="false"></div>
  </div>
</template>

<script>
import { serverurl } from '@/api';

export default {
  data() {
    return {
      clientId:
        "845190882138-9pr7hgfgeidb7f90qom56r810mf7vnes.apps.googleusercontent.com",
    };
  },
  mounted() {
    this.loadGoogleSignIn();
  },
  methods: {
    loadGoogleSignIn() {
      window.onload = () => {
        google.accounts.id.initialize({
          client_id: this.clientId,
          callback: this.handleCredentialResponse,
          scope: "email",
        });
        google.accounts.id.renderButton(
          document.getElementById("g_id_onload"),
          { theme: "outline", size: "large" } // Customize as needed
        );
      };
    },
    parseJwt(token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    },
    handleCredentialResponse(response) {
      console.log(response)
      this.sendTokenToBackend(response.credential);
    },
    async sendTokenToBackend(token) {
      const decoded = this.parseJwt(token);
      console.log("User email:", decoded.email);

      try {
        const response = await fetch(`${serverurl}/shopper/auth/google`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Origin': window.location.origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
          },
          body: JSON.stringify({ email: decoded.email }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.token) {
          console.log(data.token);
          //res.cookie('token', jwtToken, { httpOnly: true, secure: true, sameSite: 'strict' });
        }
      } catch (error) {
        console.error("Authentication error:", error.message);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.google-btn {
  display: flex;
  justify-content: center;

  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
}

.google-btn .g_id_signin {
  //width: #{scaleValue(1000)};
}
</style>
