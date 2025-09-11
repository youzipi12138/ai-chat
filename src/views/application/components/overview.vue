<template>
  <div v-if="props.data && props.data.length">
    <div class="grid grid-cols-3 gap-4">
      <div
        @click="emit('clickCard', item)"
        v-for="item in props.data"
        :key="item.id"
        class="card p-5 bg-[#fff] rounded-2xl cursor-pointer"
      >
        <div class="flex items-center gap-4">
          <app-icon iconName="app-folder" style="font-size: 32px"></app-icon>
          <div>
            <div>{{ item.name }}</div>
            <div class="text-[14px] text-[#909399]">创建者：系统管理员</div>
          </div>
        </div>
        <div class="h-20">描述：短发萨短发舒服大是大非</div>
      </div>
    </div>
  </div>
  <div v-else>暂时没有数据，请添加数据</div>
</template>
<script setup lang="ts">
defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Overview',
})
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
const emit = defineEmits(['clickCard'])
</script>
<style scoped lang="scss"></style>
