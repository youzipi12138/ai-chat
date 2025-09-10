<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="card p-5 bg-[#fff] rounded-2xl cursor-pointer">
      <div class="flex items-center gap-4">
        <app-icon iconName="app-folder" style="font-size: 32px"></app-icon>
        <div>
          <div>文件夹名称</div>
          <div class="text-[14px] text-[#909399]">创建者：系统管理员</div>
        </div>
      </div>
      <div class="h-20">描述：短发萨短发舒服大是大非</div>
    </div>
    <div class="card p-5 bg-[#fff] rounded-2xl">
      <div class="flex items-center gap-4">
        <app-icon iconName="app-folder" style="font-size: 32px"></app-icon>
        <div>
          <div>文件夹名称</div>
          <div class="text-[14px] text-[#909399]">创建者：系统管理员</div>
        </div>
      </div>
      <div class="h-20">描述：短发萨短发舒服大是大非</div>
    </div>
    <div class="card p-5 bg-[#fff] rounded-2xl">
      <div class="flex items-center gap-4">
        <app-icon iconName="app-folder" style="font-size: 32px"></app-icon>
        <div>
          <div>文件夹名称</div>
          <div class="text-[14px] text-[#909399]">创建者：系统管理员</div>
        </div>
      </div>
      <div class="h-20">描述：短发萨短发舒服大是大非</div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Overview',
})
const props = defineProps({
  Data: {
    type: Array,
    default: () => [],
  },
})
</script>
<style scoped lang="scss"></style>
