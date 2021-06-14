<script setup lang="ts">
  import { useToggle } from '@vueuse/core';
  import { isDark } from '../composables/dark';

  const toggle = useToggle(isDark);
</script>

<template>
  <button class="nav-btn" aria-label="Toggle Theme" @click="toggle">
    <ri-moon-line v-show="isDark" />
    <ri-sun-line v-show="!isDark" />
  </button>
</template>
