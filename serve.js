// 读取内容
const text = require('./src/day')

// 随机得到整数
var numX = Math.ceil(Math.random() * 18);

setTimeout(() => {
  require('./src/get')
}, 1000);

// 输入账号密码
module.exports.obj = {
  phone: '15170764528',
  password: 'Liao2041936638',
  title: text.dayTitle[numX],
  serverJ: 'SCT183817TaSyXAD2OvKBLp1W4YIS3rcFn',
  content: text.dayContent[numX],
}
