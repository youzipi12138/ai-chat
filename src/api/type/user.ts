interface loginData {
  username: string
  password: string
  captcha: string
}

interface User {
  /**
   * 用户id
   */
  id: string
  /**
   * 用户名
   */
  username: string
  nick_name: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 用户角色
   */
  role: Array<string>
  /**
   * 用户权限
   */
  permissions: Array<string>
  /**
   * 是否需要修改密码
   */
  is_edit_password?: boolean
  IS_XPACK?: boolean
  XPACK_LICENSE_IS_VALID?: boolean
  language?: string
  workspace_list?: Array<any>
  role_name?: Array<any>
}
export type { loginData, User }
