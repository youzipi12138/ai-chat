<template>
  <div class="flex mr-4 gap-2">
    <el-input
      v-model="input"
      style="max-width: 600px"
      placeholder="按名称搜索"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="select" placeholder="名称" style="width: 90px">
          <el-option label="创建者" value="1" />
          <el-option label="名称" value="2" />
          <el-option label="发布状态" value="3" />
        </el-select>
      </template>
    </el-input>
    <el-dropdown trigger="click">
      <el-button type="primary"> 创建 </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="dialogVisible = true">简单应用</el-dropdown-item>
          <el-dropdown-item>高级编排</el-dropdown-item>
          <el-dropdown-item>导入创建</el-dropdown-item>
          <el-dropdown-item @click="createFolder">添加文件夹</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dialog v-model="dialogVisible" title="创建简单应用" width="500">
      <el-form
        label-position="top"
        :model="applicationForm"
        :rules="rules"
        ref="formRef"
        require-asterisk-position="right"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="applicationForm.name" placeholder="请输入应用名称"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input
            type="textarea"
            v-model="applicationForm.desc"
            placeholder="请输入详细描述"
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="onConfirm"> 创建 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
import { ApplicationFormType } from '@/api/type/application'
import bus from '@/utils/bus'
defineOptions({
  name: 'TopSearch',
})
const props = defineProps({})
const input = ref('')
const select = ref('')

function createFolder() {
  bus.emit('CreateFolder')
}

const dialogVisible = ref(false)
const applicationForm = ref<ApplicationFormType>({
  // 应用名称
  name: '',

  // 应用描述
  desc: '',

  // 使用的模型 ID（关联模型）
  model_id: undefined,

  // 对话轮数，表示用户和应用的交互轮数
  dialogue_number: 1,

  // 应用开场白 / 问候语（prologue）
  prologue:
    '您好，我是 XXX 小助手，您可以向我提出 XXX 使用问题。\n- XXX 主要功能有什么？\n- XXX 如何收费？\n- 需要转人工服务',

  // 关联知识库 ID 列表
  knowledge_id_list: [],

  // 知识库相关配置
  knowledge_setting: {
    // 返回最相关的 top_n 条结果
    top_n: 3,

    // 相似度阈值，用于过滤相似度低的知识
    similarity: 0.6,

    // 单段落最大字符数，超过截断
    max_paragraph_char_number: 5000,

    // 搜索模式，如 embedding 或 keyword
    search_mode: 'embedding',

    // 没有引用文档时的处理配置
    no_references_setting: {
      // 状态，可选 'ai_questioning' 等
      status: 'ai_questioning',

      // 占位符，用于后续动态替换用户问题
      value: '{question}',
    },
  },

  // AI 模型相关配置
  model_setting: {
    // 模型 prompt 模板
    prompt: `已知信息：{data}
用户问题：{question}
回答要求：
- 请使用中文回答用户问题`,

    // 系统角色描述
    system: '你是 xxx 小助手',

    // 当没有引用文档时使用的 prompt
    no_references_prompt: '{question}',
  },

  // 模型其他参数配置
  model_params_setting: {},

  // 是否启用问题优化（对用户问题进行优化、改写）
  problem_optimization: false,

  // 问题优化的提示模板
  problem_optimization_prompt:
    '()里面是用户问题,根据上下文回答揣测用户问题({question}) 要求: 输出一个补全问题,并且放在<data></data>标签中',

  // 语音识别模型 ID
  stt_model_id: undefined,

  // 语音合成模型 ID
  tts_model_id: undefined,

  // 是否启用语音识别
  stt_model_enable: false,

  // 是否启用语音合成
  tts_model_enable: false,

  // TTS 类型（BROWSER 表示浏览器播放）
  tts_type: 'BROWSER',

  // 应用类型，可选 SIMPLE / ADVANCED 等
  type: 'SIMPLE',
})

const formRef = ref<FormInstance>()
const rules = reactive({
  name: [
    {
      required: true,
      message: '请输入应用名称',
      trigger: 'blur',
    },
  ],
})
const onConfirm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      console.log(1)
    }
  })
}
</script>
