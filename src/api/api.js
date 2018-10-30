import { wxRequest } from '../utils/wxRequest'

//  获取视频教程接口
const getVideo = (params) => wxRequest(params, '/singlePoetry')

export default {
  getVideo
}
