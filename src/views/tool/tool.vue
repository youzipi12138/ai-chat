<template>
  <div>
    <div class="sidenav w-[240px] bg-[#f5f6f7] h-full border-r-[#dcdfe6] border-r-1">
      <div class="text-[16px] font-bold pl-4 pt-4">工具</div>
      <folderTree
        :tree-data="treeData"
        :source-type="Source.TOOL"
        @refresh="getTreeData"
      ></folderTree>
    </div>
    <div class="logout flex-1"></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import useStore from '@/stores'
import folderTree from '@/components/FoldTree/index.vue'
import { Source } from '@/enmus/common'
defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'tool',
})
interface Tree {
  id: string
  name: string
  children?: Tree[]
}
const treeData = ref<Tree[]>()
const loading = ref(false)

const getTreeData = async () => {
  const { folder } = useStore()
  const { data } = (await folder.asyncGetFolder(Source.TOOL, {}, loading)) as {
    data: Tree[]
  }
  treeData.value = data as Tree[]
}
onMounted(() => {
  getTreeData()
})
</script>
