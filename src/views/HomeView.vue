<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
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
        <h2>{{ destination.name }}</h2>
        <img
          :src="`/images/${destination.image}`"
          :alt="destination.name"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import sourceData from '@/data.json';
import type { Destination } from '@/types';

const destinations = ref<Destination[]>(sourceData.destinations);
</script>

<style scoped></style>
