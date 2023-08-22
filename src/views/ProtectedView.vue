<template>
  <div>
    <h1>Greetings, {{ username }}!</h1>
    <button @click="logout">Logout</button>
    <router-link :to="{ name: 'invoices' }"
      ><button>Invoices</button></router-link
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = computed((): string => {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : 'anonymous';
});

const logout = () => {
  window.user = null;
  localStorage.removeItem('user');
  router.push({ name: 'home' });
};
</script>

<style scoped></style>
