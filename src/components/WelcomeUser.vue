<script setup lang="ts">
defineProps<{
  user: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1>Hello {{ user }}</h1>
  </div>
</template>

<style scoped>
</style>
