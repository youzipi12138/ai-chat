import { Result } from '@/request/Result'
import { get, post } from '@/request/index'
import type { loginData } from '@/api/type/user'
import type { Ref } from 'vue'

/**
 *
 * @param data
 * @param loading
 * @returns
 */
export const login: (data: loginData, loading?: Ref<boolean>) => Promise<Result<any>> = (
  data,
  loading,
) => {
  return post('/user/login', data, undefined, loading)
}

/**
 * 获取验证码
 * @param loading 接口加载器
 */
export const getCaptcha: (loading?: Ref<boolean>) => Promise<Result<any>> = (loading) => {
  return get('/user/captcha', undefined, loading)
}
