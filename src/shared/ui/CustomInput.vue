<script lang="ts" setup>
import { computed, useSlots } from 'vue'

const model = defineModel<string>()
const slots = useSlots()

const hasIcon = computed(() => !!slots.icon)
</script>

<template>
  <div class="input-icon-wrapper">
    <slot name="icon"></slot>
    <input v-bind="$attrs" class="input" v-model="model" :class="{ 'with-icon': hasIcon }" />
  </div>
</template>

<style>
.input-icon-wrapper {
  position: relative;
}
.input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  color: #8a8f94;
}
.input-icon {
  position: absolute;
  width: 22px;
  height: 22px;
  left: 9px;
  top: 8px;
}
.input:focus-visible {
  outline: 1px solid var(--violet);
}
.input::placeholder {
  font-size: 16px;
}
.input.with-icon {
  padding-left: 39px;
  font-size: 16px;
}
</style>
