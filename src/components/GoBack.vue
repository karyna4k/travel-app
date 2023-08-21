<template>
  <span class="go-back">
    <button @click="router.back()">Go back</button>
  </span>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped></style>
