import wepy from 'wepy'

const baseURL = 'http://39.106.63.214:8888'

// request的HTTP请求封装
const wxRequest = async(params = {}, url, method) => {
  let data = params.data || {}
  let res = await wepy.request({
    url: `${baseURL}${url}`,
    data: data,
    method: method || 'GET',
    header: params.header ||  {'Content-Type': 'application/json'}
  })
  return res
}

module.exports = {
  wxRequest
}
