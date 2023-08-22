<template>
  <div class="login">
    <form
      class="form"
      @submit.prevent="login"
    >
      <label for="username">Username</label>
      <input
        v-model="username"
        type="text"
        name="username"
        class="input"
      />
      <label for="password">Password</label>
      <input
        v-model="password"
        type="text"
        name="password"
        class="input"
      />
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const username = ref('');
const password = ref('');

const login = () => {
  window.user = username.value;
  localStorage.setItem('user', JSON.stringify(username.value));

  const redirectPath = route.query.redirect || '/protected';
  router.push(redirectPath);
};
</script>

<style scoped></style>
