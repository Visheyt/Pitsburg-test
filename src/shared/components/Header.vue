<script setup lang="ts">
import DropDownIconColored from '../svg/DropDownIconColored.vue'
import UserIcon from '../svg/UserIcon.vue'
import Badge from './Badge.vue'
</script>

<template>
  <header class="header">
    <div class="heading">
      <h1>Рецепты</h1>
      <Badge badge-style="admin">Режим администратора</Badge>
    </div>
    <div class="user">
      <UserIcon />
      <div class="user-data">
        <span class="username">Alex Shuklin</span>
        <span class="email">+998909967612</span>
      </div>
      <DropDownIconColored />
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 16px 20px;
  align-items: center;
  border-bottom: 1px solid #eaecf0;
  border-inline: 1px solid #eaecf0;
}
.heading {
  display: flex;
  gap: 12px;
  align-items: center;
}
.user {
  display: flex;
  gap: 12px;
  align-items: center;
}
.user-data {
  display: flex;
  flex-direction: column;
}
.email {
  color: #8a8f94;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: center;
}
.username {
  font-weight: 600;
  font-size: 16px;
}
</style>
