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
  serverJ: 'PDU18526TNp5KJn3hl6y9tg1avpcYFg3TPmYSv5uu',
  content: text.dayContent[numX],
}
