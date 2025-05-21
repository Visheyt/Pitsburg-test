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
  flex: 1;
}
.main-content {
  width: 100%;
}
</style>
