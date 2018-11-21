import { wxRequest } from './wxRequest.js'

// 验证验证码
const veriCode = (p) => wxRequest(p, '/code', 'POST')

// 登录接口
const login = (p) => wxRequest(p, '/login', 'POST')

// 获取家长所有的孩子信息
const getChildren = (p) => wxRequest(p, `/parents/${p.id}`, 'GET')

// 获取轮播图
const getCarousel = (p) => wxRequest(p, '/slideshows', 'GET')

// 获取视频教程接口
const getVideo = (params) => wxRequest(params, `/courses/${params.id}/video`, 'GET')

// 签到  疑问？如果连续点击多次的结果
const signIn = (params) => wxRequest(params, `/children/${params.id}/sign`, 'PUT')

export default {
  veriCode,
  login,
  getChildren,
  getCarousel,
  getVideo,
  signIn
}
