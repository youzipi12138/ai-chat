<template>
  <div class="flex m-5">
    <div v-if="folder.currentFolder === 'default'" class="text-lg font-bold">根目录</div>
    <div v-else>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item
          v-for="item in breadcrumbList"
          :key="item.id"
          @click="handleClick(item)"
          class="cursor-pointer"
          >{{ item.name }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import useStore from '@/stores'
import { computed, ref } from 'vue'
import { TreeToFlatten } from '@/utils/Array'
defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Bread',
})
const props = defineProps({
  FoldList: {
    type: Array,
    default: () => [],
  },
})
const { folder } = useStore()
const emit = defineEmits(['clickBreadcrumb'])
//获取面包屑的数据
const breadcrumbList = computed(() => {
  return getBreadcrumbList()
})
function getBreadcrumbList() {
  const path = []
  const targetFolderid = folder.currentFolder
  if (targetFolderid === 'default') return
  const Flattenlist = TreeToFlatten(props.FoldList)
  let curFolderid: string | null = targetFolderid
  while (curFolderid) {
    const findNode = Flattenlist.find((item) => item.id === curFolderid)
    if (!findNode) break
    path.unshift(findNode)
    curFolderid = findNode.parent_id
  }
  return path
}
function handleClick(item) {
  emit('clickBreadcrumb', item)
  // folder.currentFolder = 'default'
  // folder.setCurrentFolder(item.id)
}
//获取面包屑的数据
// const { folder } = useStore()
// const currentFolder = ref(folder.currentFolder)
// const breadList = ref([])
// const getBreadList = () => {
//   breadList.value = []
//   if (currentFolder.value === 'default') {
//     return
//   }
//   const TreeFlatten = TreeToFlatten(props.FoldList)
//   let targetFolderid: string | null = currentFolder.value
//   while (targetFolderid) {
//     const findNode = TreeFlatten.find((item: any) => item.id === targetFolderid)
//     if (!findNode) {
//       break
//     }
//     breadList.value.unshift(findNode)
//     targetFolderid = findNode.parent_id as string
//   }
//   console.log(breadList.value)
// }
// watch(
//   () => folder.currentFolder,
//   () => {
//     getBreadList()
//   },
//   { immediate: true },
// )
</script>
