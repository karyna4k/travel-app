<template>
  <app-navigation />
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
      >
        <component
          :is="Component"
          :key="route.path"
        ></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import AppNavigation from '@/components/AppNavigation.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
