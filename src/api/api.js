import { wxRequest } from './wxRequest.js'

// 获取视频教程接口
const getVideo = (params) => wxRequest(params, '/courses/k1/video')

// 签到  疑问？如果连续点击多次的结果
const signIn = (params) => wxRequest(params, '/children/6/sign')

export default {
  getVideo,
  signIn
}
