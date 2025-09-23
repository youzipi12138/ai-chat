<template>
  <div>
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
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'

const dialogVisible = ref(false)
const formRef = ref()
const formData = reactive({
  name: '',
  desc: '',
  parent_id: '',
})

watch(dialogVisible, (newVal) => {
  if (!newVal) {
    formRef.value.resetFields()
  }
})
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
</script>
