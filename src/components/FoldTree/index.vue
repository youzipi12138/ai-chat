<template>
  <div class="w-full flex justify-center flex-col px-2 pt-2">
    <!-- <AppIcon iconName="app-folder" style="font-size: 20px"></AppIcon> -->
    <el-input prefix-icon="Search" placeholder="请输入" clearable class=""></el-input>
    <el-scrollbar>
      <el-tree
        empty-text=""
        ref="treeRef"
        style="max-width: 600px"
        :data="treeData"
        :props="defaultProps"
        @node-click="handleNodeClick"
        highlight-current
        accordion
        node-key="id"
        :default-expanded-keys="[folder.currentFolder]"
        :current-node-key="folder.currentFolder"
        class="p-2"
      >
        <template #default="{ node, data }">
          <div class="container flex items-center">
            <AppIcon iconName="app-folder" style="font-size: 20px"></AppIcon>
            <span class="ml-4 ellipsis" style="max-width: 110px">{{ node.label }}</span>
          </div>
          <el-dropdown trigger="click">
            <el-button text @click.stop="handleDropdownClick(node)">
              <AppIcon iconName="app-more" style="font-size: 20px"></AppIcon
            ></el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click.stop="onClick">
                  <AppIcon iconName="app-add-folder" style="font-size: 20px"></AppIcon>
                  添加子文件夹
                </el-dropdown-item>
                <el-dropdown-item>
                  <AppIcon iconName="app-edit" style="font-size: 20px"></AppIcon>
                  编辑
                </el-dropdown-item>
                <el-dropdown-item @click.stop="onDelClick(node)"
                  ><AppIcon iconName="app-delete" style="font-size: 20px"></AppIcon
                  >删除</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
        <!-- <template #empty>
          <content-loader
            viewBox="0 0 223.2 265"
            :speed="2"
            primaryColor="#e6e7e8"
            secondaryColor="#f0f1f2"
          >
            <rect x="10" y="10" rx="5" ry="5" width="200" height="40" />
            <rect x="40" y="60" rx="5" ry="5" width="170" height="40" />
            <rect x="40" y="110" rx="5" ry="5" width="170" height="40" />
          </content-loader>
        </template> -->
      </el-tree>
    </el-scrollbar>
  </div>
  <el-dialog v-model="dialogVisible" title="添加文件夹" width="500" draggable>
    <el-form
      ref="formRef"
      label-position="top"
      :model="formData"
      require-asterisk-position="right"
      :rules="rule"
    >
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
import { reactive, ref, watch } from 'vue'
import { delFolder, postFolder } from '@/api/folder'
import { MsgSuccess, MsgConfirm } from '@/utils/message'
import useStore from '@/stores'
import { ContentLoader } from 'vue-content-loader'
defineOptions({
  name: 'FoldTree',
})
const props = defineProps({
  treeData: {
    type: Array,
    default: () => [],
  },
  sourceType: {
    type: String,
    default: '',
    required: true,
  },
})
const emit = defineEmits(['refresh', 'handlerClickCurNode'])
const { folder } = useStore()
interface Tree {
  id: string
  name: string
  children?: Tree[]
}
//默认点击第一个节点
// const defaultClickNode = ref<string>()
const handleNodeClick = (data: Tree) => {
  console.log('data', data)
  folder.setCurrentFolder(data.id)
  emit('handlerClickCurNode', data)
}

const defaultProps = {
  id: 'id',
  children: 'children',
  label: 'name',
}
const dialogVisible = ref(false)
const loading = ref(false)

watch(dialogVisible, (newVal) => {
  if (!newVal) {
    formRef.value.resetFields()
  }
})

//获取parent_id
const parentid = ref('')
const handleDropdownClick = (node: any) => {
  console.log(1, node)
  if (node.level === 1) {
    parentid.value = 'default'
  } else {
    parentid.value = node.data.id
  }
}
const formRef = ref()
//添加文件夹
const onConfirm = async () => {
  await formRef.value.validate((valid: boolean) => {
    if (valid) {
      const params = {
        name: formData.name,
        desc: formData.desc,
        parent_id: parentid.value,
      }
      postFolder(props.sourceType, params, loading).then(() => {
        MsgSuccess('添加成功')
        emit('refresh')
        dialogVisible.value = false
      })
    }
  })
  dialogVisible.value = false
}
//删除文件夹
const onDelClick = async (node: any) => {
  MsgConfirm(`是否要删除${node.label}`, '删除之后就不可以恢复了', {
    confirmButtonClass: 'danger',
  }).then(() => {
    delFolder(node.data.id, props.sourceType, loading).then(() => {
      MsgSuccess('删除成功')
      emit('refresh')
    })
  })
}
// const dialogOverflowVisible = ref(false)
// const customDraggingVisible = ref(false)
const onClick = () => {
  dialogVisible.value = true
}

const formData = reactive({
  name: '',
  desc: '',
  parent_id: '',
})

const rule = reactive({
  name: [
    {
      required: 'true',
      message: '请输入文件夹名称',
      trigger: 'blur',
    },
  ],
})

const treeRef = ref()
function triggerClick(id) {
  treeRef.value.setCurrentKey(id) // 只是高亮
  const node = treeRef.value.getNode(id) // 拿到节点
  if (node) {
    handleNodeClick(node.data) // 手动调用点击事件回调
  } // 等价于点击节点
}
defineExpose({
  triggerClick,
})
</script>
<style lang="scss" scoped>
::v-deep(.el-tree) {
  background: none;
}
::v-deep(.el-tree-node__content) {
  height: 40px;
  border-radius: 6px;
  margin: 7px 0;
  &:hover {
    background: #1f23291a;
  }
}
::v-deep(.el-tree-node.is-current > .el-tree-node__content) {
  background-color: #ebf1ff !important; /* 改成你想要的背景色 */
  color: #3370ff !important; /* 字体颜色 */
}
</style>
