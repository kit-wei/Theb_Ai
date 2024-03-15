<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import MainComponent from '@/components/MainComponent.vue'
</script>

<template>
  <div class="parent-box">
    <MainComponent></MainComponent>
  </div>
</template>

<style scoped lang="less">
.parent-box{
  width: 100%;
  height: 100%;
}
</style>
