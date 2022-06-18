<script setup lang="ts">
import WelcomeUser from "./components/WelcomeUser.vue";
import { onMounted, pushScopeId, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut, type Auth } from "firebase/auth";
import router from "./router";

const userName = ref("");
const isLoggedIn = ref(false);

let auth: Auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userName.value = (user.displayName || "").toString();
      isLoggedIn.value = true;
      router.push("/user-home");
    } else {
      isLoggedIn.value = false;
      router.push("/sign-in");
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    userName.value = "";
    router.push("/sign-in");
  });
};
</script>

<template>
  <div v-if="isLoggedIn">
    <header>
      <WelcomeUser :user="userName" />
    </header>
    <nav>
      <router-link to="/user-home"> User Page </router-link>|
      <router-link to="/tool-list"> Learning Tools </router-link>|
      <button @click="handleSignOut">Sign Out</button>
    </nav>
  </div>
  <router-view />
</template>

<style>
@import "./assets/base.css";
</style>
