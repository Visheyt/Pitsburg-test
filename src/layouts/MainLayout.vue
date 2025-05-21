<script setup lang="ts">
import Header from '@/shared/components/Header.vue'
</script>

<template>
  <div>
    <Header />
    <Aside>ASIDE SUQA</Aside>
    <main>
      <router-view />
    </main>
  </div>
</template>
