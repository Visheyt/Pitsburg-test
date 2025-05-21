<script setup lang="ts">
import Logo from '../svg/Logo.vue'
import { navItems } from '@/data/nav-items'
</script>

<template>
  <aside class="aside">
    <div class="aside-header">
      <Logo />
    </div>
    <nav class="navigation">
      <RouterLink
        v-for="navItem of navItems"
        :key="navItem.id"
        :to="navItem.routePath"
        class="nav-item"
      >
        <component :is="navItem.icon" class="icon" />
        {{ navItem.name }}
      </RouterLink>
    </nav>
  </aside>
</template>

<style>
.aside {
  display: flex;
  flex-direction: column;
  padding-block: 13px;
  min-width: 236px;
  background-color: #ffffff;
}
.aside-header {
  padding: 13px 12px 13px 16px;
  border-bottom: 1px solid #8a8f9329;
}
.navigation {
  border-right: 1px solid #eaecf0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
}
.nav-item {
  padding: 8px;
  display: flex;
  gap: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 212px;
  height: 40px;
  align-items: center;
  border-radius: 8px;
  color: '#5A5C5F';
}

.navigation a.router-link-exact-active {
  color: White;
  background: #af52de;
}
</style>
