// 微信接口
// 在组件内部保留抽象，方便日后替换掉wx接口模块

/**
 * 调用微信接口(仅在该脚本内部使用)
 * @param wxAPI {function} config {object}
 * @return {Promise}
 */
const _configFn = (wxAPI, config = {}) => {
    return new Promise((resolve, reject) => {
        config.success = res => (resolve(res));
        config.fail = err => (reject(err));
        wxAPI(config);
    })
}

/**
 * 通过wx.request发起ajax请求
 * @param url {String} method {string} data {object} header {object}
 * @return {Promise}
 */
const ajax = ({url, method, data, header}) => {
    return _configFn(wx.request, {
        url: url,
        method: method,
        data: data,
        header: header
    })
}

const wxLogin = () => {
    return _configFn(wx.login);
}

const wxGetUserInfo = () => {
    return _configFn(wx.getUserInfo);
}

const getSystemInfo = () => {
    return _configFn(wx.getSystemInfo);
}

/**
 * 跳转
 * @param url {String} 跳转相对路径
 * @return {Promise}
 */
const jumpTo = url => {
    return _configFn(wx.navigateTo, {url});
}

const jumpBack = delta => {
    return _configFn(wx.navigateBack, {delta: delta || 1})
}

const wxRelaunch = url => {
    return _configFn(wx.navigateBack, {url})
}

const toast = (title, icon = 'none', duration = 1500, hasMask = false) => {
    return _configFn(wx.showToast, {
        title: title, // 提示的内容
        icon: icon, // 图标, 有效值为'none'、'success'、'fail'
        duration: duration, // 提示持续的时间(ms)
        mask: hasMask // 是否显示透明蒙层，防止触摸穿透
    })
}

const setStorage = (key, value) => {
    return _configFn(wx.setStorage, {key: key, data: value});
}

const cleanStorage = () => {
    return _configFn(wx.clearStorage, {});
}

const getStorage = (key) => {
    return _configFn(wx.getStorage, {key: key});
}

const getSetting = () => {
    return _configFn(wx.getSetting, {});
}

const chooseImg = () => {
    return _configFn(wx.chooseImage,{count: 1})
}

const uploadFile = (url, filePath, name = 'file', header) => {
    return _configFn(wx.uploadFile, {
        url: url,
        filePath: filePath,
        name: name,
        header: header
    })
}

export {
    ajax, // 发起ajax请求
    wxLogin, // 登录
    wxGetUserInfo, // 获取用户信息
    getSystemInfo, // 获取系统信息
    jumpTo, // page跳转
    jumpBack, // page返回
    wxRelaunch, // 关闭所有页面并跳转至新页面
    toast, // 显示消息提示框
    setStorage, // 设置cookie
    cleanStorage, // 清除cookie
    getStorage, // 获取cookie
    getSetting, // 获取用户授权信息
    chooseImg, // 选择本地图片或照相
    uploadFile, // 上传本地文件
}