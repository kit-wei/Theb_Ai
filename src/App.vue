<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import MainComponent from '@/components/MainComponent.vue'
</script>

<template>
  <div class="parent-box">
    <Header></Header>
    <main class="body">
      <MainComponent></MainComponent>
    </main>
  </div>
</template>

<style scoped lang="less">
.parent-box{
  width: 100%;
  .body{
    width: 100%;
    height: calc(100vh - 37px);
  }
}
</style>
