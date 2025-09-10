import Result from '@/request/Result'

import { get, post, del, put } from '@/request/index'
import { type Ref } from 'vue'

const prefix: any = { _value: '/workspace/' }
Object.defineProperty(prefix, 'value', {
  get: function () {
    // const { user } = useStore()
    // return this._value + user.getWorkspaceId()
    return this._value + localStorage.getItem('workspace_id')
  },
})
// 获取文件夹列表
export const getFolderList: (
  source: string,
  data?: any,
  loading?: Ref<boolean>,
) => Promise<Result<Array<any>>> = (source, data, loading) => {
  return get(`${prefix.value}/${source}/folder`, data, loading)
}
/**
 * 添加文件夹
 * @params 参数
 *  source : APPLICATION, KNOWLEDGE, TOOL
 {
 "name": "string",
 "desc": "string",
 "parent_id": "default"
 }
 */
export const postFolder: (
  source: string,
  data?: any,
  loading?: Ref<boolean>,
) => Promise<Result<Array<any>>> = (source, data, loading) => {
  return post(`${prefix.value}/${source}/folder`, data, null, loading)
}
/**
 * 删除文件夹
 * @params 参数
 *  folder_id
 *  source : APPLICATION, KNOWLEDGE, TOOL
 */
export const delFolder: (
  folder_id: string,
  source: string,
  loading?: Ref<boolean>,
) => Promise<Result<boolean>> = (folder_id, source, loading) => {
  return del(`${prefix.value}/${source}/folder/${folder_id}`, undefined, {}, loading)
}
