<template>
    <div>
        <div v-if="!currentUser.email">
            <LandingPage />
        </div>

        <div v-if="currentUser.email && currentUser.name">
            <Home />
        </div>


    </div>
</template>

<script>
import { mapState } from "vuex";
import { serverurl } from "@/api";

export default {
    mounted() {

    },
    computed: {
        ...mapState("user", {
            currentUser: (state) => state.currentUser,
            isLoading: (state) => state.loading,
            jwtToken: (state) => state.jwtToken,
            globalLoading: (state) => state.loading
        }),
        cleanedUserName() {
            if (!this.currentUser?.name) return "";
            return this.currentUser.name.split(" ")[0].replace(/\s+/g, "");
        }
    },
    watch: {
        currentUser(newVal) {
            if (newVal.email && !newVal.name  || newVal.name && !newVal.email) {
                this.$router.push('/authp')
            }
        }
    }
}
</script>