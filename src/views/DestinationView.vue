<template>
  <div v-if="destination">
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <go-back />
      <div class="destination-details">
        <img
          :src="`/images/${destination.image}`"
          :alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience',
            params: { experienceSlug: experience.slug },
          }"
        >
          <experience-card :experience="experience" />
        </router-link>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import sourceData from '@/data.json';
import ExperienceCard from '@/components/ExperienceCard.vue';
import GoBack from '@/components/GoBack.vue';
import type { Destination } from '@/types';

type Props = {
  id: number;
};

const props = defineProps<Props>();

const destination = computed((): Destination | undefined => {
  return sourceData.destinations.find(
    (destination: Destination) => destination.id === props.id
  );
});
</script>

<style scoped></style>
