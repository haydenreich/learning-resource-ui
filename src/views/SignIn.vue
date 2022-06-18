<script setup lang="ts">
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter(); // get a reference to our vue router

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/user-home");
    })
    .catch((error) => {
      // handle error
    });
};
</script>

<template>
  <h1>Sign In</h1>
  <p><button @click="signInWithGoogle">Log In With Google</button></p>
</template>
