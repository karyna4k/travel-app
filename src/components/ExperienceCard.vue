<template>
  <div class="card">
    <img
      :src="`/images/${experience.image}`"
      :alt="experience.name"
    />
    <div class="card-text">{{ experience.name }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Expirience } from '@/types';

type Props = {
  experience: Expirience;
};

defineProps<Props>();
</script>

<style scoped></style>
