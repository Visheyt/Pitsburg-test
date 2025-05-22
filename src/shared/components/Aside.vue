<script setup lang="ts">
import DoubleLeftIcon from '../svg/DoubleLeftIcon.vue'
import DownIcon from '../svg/DownIcon.vue'
import Logo from '../svg/Logo.vue'
import { navItems } from '@/data/nav-items'
</script>

<template>
  <aside class="aside">
    <div class="aside-header">
      <Logo class="logo" />
      <button class="aside-button">
        <DoubleLeftIcon />
      </button>
    </div>
    <nav class="navigation">
      <RouterLink
        v-for="navItem in navItems"
        :key="navItem.id"
        :to="navItem.routePath"
        class="nav-item"
      >
        <div class="nav-item-name">
          <component :is="navItem.icon" class="icon" />
          {{ navItem.name }}
        </div>
        <div v-if="navItem.dropDown">
          <DownIcon />
        </div>
      </RouterLink>
    </nav>
  </aside>
</template>

<style>
.aside {
  display: flex;
  flex-direction: column;
  min-width: 236px;
  background-color: #ffffff;
}
.aside-header {
  padding: 13px 12px 13px 16px;
  border-bottom: 1px solid #8a8f9329;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 115px;
  height: 36px;
}
.navigation {
  border-right: 1px solid #eaecf0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
}
.aside-button {
  border-radius: 6px;
  padding: 8px;
  background-color: #eef2f5;
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
  transition: background-color 0.3s ease;
  justify-content: space-between;
  align-items: center;
}
.nav-item-name {
  display: flex;
  align-items: center;
  gap: 12px;
}
.nav-item:hover {
  background: #c584e6;
  color: rgb(49, 49, 49);
}

.navigation a.router-link-exact-active {
  color: White;
  background: #af52de;
}
</style>
