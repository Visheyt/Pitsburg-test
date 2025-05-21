<template>
  <div class="tag">
    <slot />
  </div>
</template>

<style scoped>
.tag {
  border: 1px solid #1018280a;
  background:
    linear-gradient(0deg, #d0d5dd, #d0d5dd),
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  padding: 2px 8px;
  border-radius: 100px;
  color: #5a5c5f;
}
</style>
