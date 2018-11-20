// 常用方法

// 解构对象得到url所需参数
const objToUrl = (obj) => {
    let url = '?';
    for(let key in obj) {
        url += `${key}=${obj[key]}&`
    }
    return url.slice(0, url.length - 1)
}

export {
    objToUrl, // 将对象转化为url所需的参数
}