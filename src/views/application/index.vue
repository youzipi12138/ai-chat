<template>
  <div class="flex w-full">
    <div class="sidenav w-[240px] bg-[#f5f6f7] h-full border-r-[#dcdfe6] border-r-1">
      <div class="text-[16px] font-bold pl-4 pt-4">应用</div>
      <FoldTree
        :tree-data="treeData"
        :source-type="Source.APPLICATION"
        @refresh="getTreeData"
        @handlerClickCurNode="setNextChildrenFold"
      ></FoldTree>
    </div>
    <div class="logout flex-1 bg-[#f5f6f7] items-center">
      <div class="flex h-[60px] justify-between items-center">
        <Bread :FoldList="treeData"></Bread>
        <TopSearch></TopSearch>
      </div>
      <overview :data="childrenData" class="p-5"></overview>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import useStore from '@/stores'
import FoldTree from '@/components/FoldTree/index.vue'
import { Source } from '@/enmus/common'
import Overview from '@/views/application/components/overview.vue'
import Bread from '@/components/folderbread/index.vue'
import TopSearch from '@/components/top-search/index.vue'

defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Application',
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
  const { data } = (await folder.asyncGetFolder(Source.APPLICATION, {}, loading)) as {
    data: Tree[]
  }
  treeData.value = data as Tree[]
}
onMounted(() => {
  getTreeData()
})

const childrenData = ref<any>()
const setNextChildrenFold = (data: any) => {
  childrenData.value = data.children
}
</script>
