<template>
  <div>
    <div class="sidenav w-[240px] bg-[#f5f6f7] h-full border-r-[#dcdfe6] border-r-1">
      <div class="text-[16px] font-bold pl-4 pt-4">应用</div>
      <folderTree :tree-data="treeData"></folderTree>
    </div>
    <div class="logout flex-1"></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import useStore from '@/stores'
import folderTree from '@/component/flolder-tree/index.vue'
defineOptions({
  name: 'Application',
})
interface Tree {
  id: string
  name: string
  children?: Tree[]
}
const treeData = ref<Tree[]>()
const loading = ref(false)
onMounted(async () => {
  const { folder } = useStore()
  const { data } = (await folder.asyncGetFolder('KNOWLEDGE', {}, loading)) as { data: Tree[] }
  treeData.value = data as Tree[]
})
</script>
