// 验证码
const ccap = require('ccap')
let cap1 = async (ctx, next) => {
    let cap = ccap();
    let capArr = cap.get();
    console.log(capArr);
    ctx.body = {
        capArr: capArr
    }
    await next();
}
module.exports = {
    cap1
}