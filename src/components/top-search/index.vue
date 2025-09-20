<template>
  <div class="flex mr-4 gap-2">
    <el-input
      v-model="input"
      style="max-width: 600px"
      placeholder="按名称搜索"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="select" placeholder="名称" style="width: 90px">
          <el-option label="创建者" value="1" />
          <el-option label="名称" value="2" />
          <el-option label="发布状态" value="3" />
        </el-select>
      </template>
    </el-input>
    <el-dropdown trigger="click">
      <el-button type="primary"> 创建 </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>简单应用</el-dropdown-item>
          <el-dropdown-item>高级编排</el-dropdown-item>
          <el-dropdown-item>导入创建</el-dropdown-item>
          <el-dropdown-item>添加文件夹</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'TopSearch',
})
const props = defineProps({})
const input = ref('')
const select = ref('')
</script>
