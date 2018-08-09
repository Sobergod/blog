// token相关操作
const jwt = require('jsonwebtoken')
const { TOKEN } = require('../../config/config')

let createToken = function (id) {
    const token = jwt.sign(
        { id: id },
        TOKEN.pas,
        { expiresIn: '60s' }
    )
    return token;
}
let checkToken = async (ctx, next) => {
    const authorization = ctx.get('Authorization');
    if (authorization === '') {
        ctx.throw(401, 'no token');
    }
    // 验证token
    const token = authorization.split(' ')[1];
    let tokencontent;
    try {
        tokencontent = await jwt.verify(token, TOKEN.pas);
    } catch (error) {
        ctx.throw(401, 'invalid token');
    }
    await next();
}
module.exports = {
    createToken,
    checkToken
}