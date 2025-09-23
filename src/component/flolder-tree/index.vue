<template>
  <div class="w-full">
    <!-- <AppIcon iconName="app-folder" style="font-size: 20px"></AppIcon> -->
    <el-input prefix-icon="Search" placeholder="请输入" clearable class="px-3"></el-input>
    <el-scrollbar>
      <el-tree
        style="max-width: 600px"
        :data="treeData"
        :props="defaultProps"
        @node-click="handleNodeClick"
        class="p-2"
      >
        <template #default="{ node, data }">
          <div class="container flex items-center">
            <AppIcon iconName="app-folder" style="font-size: 20px"></AppIcon>
            <span class="ml-4 ellipsis" style="max-width: 110px">{{ node.label }}</span>
          </div>
          <el-dropdown trigger="click">
            <el-button text @click.stop>
              <AppIcon iconName="app-more" style="font-size: 20px"></AppIcon
            ></el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="onClick">
                  <AppIcon iconName="app-add-folder" style="font-size: 20px"></AppIcon>
                  添加子文件夹
                </el-dropdown-item>
                <el-dropdown-item>
                  <AppIcon iconName="app-edit" style="font-size: 20px"></AppIcon>
                  编辑
                </el-dropdown-item>
                <el-dropdown-item
                  ><AppIcon iconName="app-delete" style="font-size: 20px"></AppIcon
                  >删除</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-tree>
    </el-scrollbar>
  </div>
  <el-dialog v-model="dialogVisible" title="添加文件夹" width="500" draggable>
    <el-form label-position="top" :model="formData" require-asterisk-position="right" :rules="rule">
      <el-form-item label="文件夹名称" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input type="textarea" v-model="formData.desc"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onConfirm"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import useStore from '@/stores'
import { postFolder } from '@/api/folder'
defineOptions({
  name: 'FoldTree',
})
interface Tree {
  id: string
  name: string
  children?: Tree[]
}
const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const treeData = ref<Tree[]>()
const defaultProps = {
  id: 'id',
  children: 'children',
  label: 'name',
}
const dialogVisible = ref(false)
// const dialogOverflowVisible = ref(false)
// const customDraggingVisible = ref(false)
const onClick = () => {
  dialogVisible.value = true
}
const onConfirm = () => {
  postFolder()
  dialogVisible.value = false
}
const formData = reactive({
  name: '',
  desc: '',
  parent_id: '',
})

const rule = reactive({
  name: [
    {
      required: true,
      message: '请输入文件夹名称',
      trigger: 'blur',
    },
  ],
})
const loading = ref(false)
onMounted(async () => {
  const { folder } = useStore()
  const { data } = (await folder.asyncGetFolder('KNOWLEDGE', {}, loading)) as { data: Tree[] }
  treeData.value = data as Tree[]
})
</script>
<style lang="scss" scoped>
::v-deep(.el-tree) {
  // background: none;
}
::v-deep(.el-tree-node__content) {
  height: 40px;
  border-radius: 6px;
  margin: 7px 0;
}
</style>
