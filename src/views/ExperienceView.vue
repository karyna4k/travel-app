<template>
  <section v-if="experience">
    <h1>{{ experience.name }}</h1>
    <img
      :src="`/images/${experience.image}`"
      :alt="experience.name"
    />
    <p>{{ experience.description }}</p>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import sourceData from '@/data.json';
import type { Destination, Expirience } from '@/types';

type Props = {
  id: number;
  experienceSlug: string;
};

const props = defineProps<Props>();

const destination = computed((): Destination | undefined => {
  return sourceData.destinations.find(
    (destination: Destination) => destination.id === props.id
  );
});

const experience = computed((): Expirience | undefined => {
  return destination.value?.experiences.find(
    (experience: Expirience) => experience.slug === props.experienceSlug
  );
});
</script>

<style scoped></style>
