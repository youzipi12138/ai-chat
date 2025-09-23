interface ApplicationFormType {
  name?: string
  desc?: string
  model_id?: string
  dialogue_number?: number
  prologue?: string
  knowledge_id_list?: string[]
  knowledge_setting?: any
  model_setting?: any
  problem_optimization?: boolean
  problem_optimization_prompt?: string
  icon?: string | undefined
  type?: string
  work_flow?: any
  model_params_setting?: any
  tts_model_params_setting?: any
  stt_model_id?: string
  tts_model_id?: string
  stt_model_enable?: boolean
  tts_model_enable?: boolean
  tts_type?: string
  tts_autoplay?: boolean
  stt_autosend?: boolean
  folder_id?: string
  workspace_id?: string
}

export type { ApplicationFormType }
