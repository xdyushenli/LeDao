import { wxRequest } from './wxRequest.js'

// 验证验证码
const veriCode = (p) => wxRequest(p, '/code', 'POST')

// 登录接口
const login = (p) => wxRequest(p, '/login', 'POST')

// 获取视频教程接口
const getVideo = (params) => wxRequest(params, '/courses/k1/video', 'GET')

// 签到  疑问？如果连续点击多次的结果
const signIn = (params) => wxRequest(params, '/children/6/sign', 'PUT')

export default {
  veriCode,
  login,
  getVideo,
  signIn
}
