<template>
  <div>
    <header class="flex h-18 items-center justify-between px-10">
      <div class="logo flex items-center space-x-1">
        <img src="@/assets/logo.svg" alt="" class="w-10 h-10" />
        <span class="font-bold bg-gradient-to-r from-[#3370ff] to-[#7f3bf5] from text-white"
          >智能助手</span
        >
      </div>
      <ul class="flex space-x-4 font-medium text-[#1f2329]">
        <router-link to="/main/application">应用</router-link>
        <router-link to="/main/knowledge">知识库</router-link>
        <router-link to="/main/tool">工具</router-link>
        <router-link to="/main/model">模型</router-link>
      </ul>
      <div class="user flex items-center space-x-1 text-[#1f2329]">
        <div class="ava w-10 h-10">
          <img src="@/assets/ava.JPG" alt="" class="rounded-full" />
        </div>
        <div>admin</div>
      </div>
    </header>
  </div>
</template>
<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({
  name: 'NavHeader',
})
</script>
<style lang="scss" scoped>
header {
  background: var(--app-header-bg-color);
}
</style>
