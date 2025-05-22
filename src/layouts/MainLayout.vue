<script setup lang="ts">
import Aside from '@/shared/components/Aside.vue'
import Header from '@/shared/components/Header.vue'
</script>

<template>
  <div class="main-layout">
    <Aside />
    <div class="main-content">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.main-layout {
  display: flex;
  height: 100vh;
}
.main-content {
  width: 100%;
}
</style>
