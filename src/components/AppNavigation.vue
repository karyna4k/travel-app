<template>
  <div id="nav">
    <router-link
      id="logo"
      to="/"
      >Travel App</router-link
    >
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination',
        params: {
          id: destination.id,
          slug: destination.slug,
        },
      }"
    >
      {{ destination.name }}
    </router-link>
    <router-link :to="{ name: 'protected' }">Dashboard</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import sourceData from '@/data.json';
import type { Destination } from '@/types';

const destinations = ref<Destination[]>(sourceData.destinations);
</script>

<style scoped></style>
