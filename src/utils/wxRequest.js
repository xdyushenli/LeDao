import wepy from 'wepy'

const baseURL = 'http://api.apiopen.top'

// request的HTTP请求封装
const wxRequest = async(params = {}, url) => {
  // loading() 显示加载
  let data = params.data || {}
  let res = await wepy.request({
    url: `${baseURL}${url}`,
    data: data,
    method: params.method || 'GET',
    header: { 'Content-Type': 'application/json' }
  })
  // loaded() 加载完成
  return res
}

module.exports = {
  wxRequest
}
