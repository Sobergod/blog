// token相关操作
const jwt = require('jsonwebtoken')
const adminUserHelper = require('../../app/api/dbhelper/admin-user-helper')
const { TOKEN } = require('../../config/config')
let createToken = async (ctx, next) => {
    let adminUser = ctx.request.body.user;
    let dbResult = await adminUserHelper.findOne({ adminUser });    
    const token = jwt.sign(
        { id: dbResult.id },
        TOKEN.pas,
        { expiresIn: '60s' }
    )
    ctx.state.token = token;
    await next();
    // return token;
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