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
          <el-option
            v-for="item in typeName"
            :label="item.label"
            :value="item.value"
            :key="item.label"
          />
        </el-select>
      </template>
    </el-input>
    <el-dropdown trigger="click">
      <el-button type="primary"> chuanjia </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
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
const props = defineProps({
  typeName: {
    type: Array,
    default: () => [],
  },
})
const input = ref('')
const select = ref('')
</script>
