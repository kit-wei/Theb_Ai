<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import MainComponent from '@/components/MainComponent.vue'
</script>

<template>
  <div class="flex w-full h-[100vh] flex-col">
    <Header></Header>
    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="less">
</style>
