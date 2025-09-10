<template>
  <div class="flex flex-col h-screen">
    <div>
      <nav-header></nav-header>
    </div>
    <div class="flex flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import NavHeader from '@/layout/header/index.vue'
</script>
<style lang="scss" scoped></style>
