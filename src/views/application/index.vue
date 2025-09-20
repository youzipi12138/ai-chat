<template>
  <div class="flex w-full">
    <div class="sidenav w-[240px] bg-[#f5f6f7] h-full border-r-[#dcdfe6] border-r-1">
      <div class="text-[16px] font-bold pl-4 pt-4">应用</div>
      <!-- <content-loader
        v-if="shouldRenderSkeleton"
        viewBox="0 0 223.2 265"
        :speed="2"
        primaryColor="#e6e7e8"
        secondaryColor="#f0f1f2"
      >
        <rect x="10" y="10" rx="5" ry="5" width="200" height="40" />
        <rect x="40" y="60" rx="5" ry="5" width="170" height="40" />
        <rect x="40" y="110" rx="5" ry="5" width="170" height="40" />
      </content-loader> -->
      <FoldTree
        ref="FoldTreeRef"
        :tree-data="treeData"
        :source-type="Source.APPLICATION"
        @refresh="getTreeData"
        @handlerClickCurNode="setNextChildrenFold"
      ></FoldTree>
    </div>
    <div class="logout flex-1 bg-[#f5f6f7] items-center">
      <div class="flex h-[60px] justify-between items-center">
        <Bread :FoldList="treeData" @clickBreadcrumb="handleClickBreadcrumb"></Bread>
        <TopSearch :typeName="typeName"></TopSearch>
      </div>
      <overview :data="overviewData" @clickCard="handleClickCard" class="p-5"></overview>
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
import { useSmartSkeleton } from '@/useHook/useSmartSkeletonHook'
import { ContentLoader } from 'vue-content-loader'
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
const loading = ref(true)

// 调用智能骨架屏控制函数
const { shouldRenderSkeleton } = useSmartSkeleton(loading, {
  delay: 150, // 150ms 后再显示骨架屏
  minDisplayTime: 300, // 骨架屏至少显示 200ms
})

const getTreeData = async () => {
  const { folder } = useStore()
  const { data } = (await folder.asyncGetFolder(Source.APPLICATION, {})) as {
    data: Tree[]
  }
  treeData.value = data as Tree[]
  loading.value = false
}
onMounted(() => {
  getTreeData()
})
// overview的数据设置
const overviewData = ref<any>()
const setNextChildrenFold = (data: any) => {
  overviewData.value = data.children
}

const FoldTreeRef = ref()
// 点击面包屑
const handleClickBreadcrumb = (item: Tree) => {
  // setNextChildrenFold(item)
  FoldTreeRef.value.triggerClick(item.id)
}
//点击卡片
const handleClickCard = (item: Tree) => {
  console.log(item)
  FoldTreeRef.value.triggerClick(item.id)
}

//搜索栏
</script>
