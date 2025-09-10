<template>
  <div class="flex">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import FoldTree from '@/component/flolder-tree/index.vue'
defineOptions({
  name: 'SideNav',
})
</script>
