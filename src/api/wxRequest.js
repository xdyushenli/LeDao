import wepy from 'wepy'

const baseURL = 'http://39.106.63.214:8888'

// request的HTTP请求封装
const wxRequest = async(params = {}, url) => {
  // loading() 显示加载
  let data = params.data || {}
  let res = await wepy.request({
    url: `${baseURL}${url}`,
    data: data,
    method: params.method || 'GET',
    header: {
      'Content-Type': 'application/json',
      'Authentication': 'eyJhbGciOiJIUzUxMiJ9.eyJpZCI6NiwiZXhwIjoxNTQyMjE3NTE3LCJpYXQiOjE1NDEyMTc1MTd9.ZGWAXTWBsBpiXV5oASOUHFaz-VJj1X29NRUJWlwmkVvhH_6OiMoqIfz4NIK10Fibm2cM1E8vR9-zn3K_vm6qZg'
    }
  })
  // loaded() 加载完成
  return res
}

module.exports = {
  wxRequest
}
