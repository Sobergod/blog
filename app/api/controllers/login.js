const { resCode } = require('../../../config/message.map')
const adminUserHelper = require('../../../app/api/dbhelper/admin-user-helper')
const { createToken } = require('../../../middleware/token/token')
const { decrypted } = require('../../../middleware/rsa/rsa')
let adminLogin = async (ctx, next) => {
    let adminUser = ctx.request.body.user;
    let password = await decrypted(ctx.request.body.password);
    let dbResult = await adminUserHelper.findOne({ adminUser });
    if (dbResult) {
        if (dbResult.password === password) {
            let token = createToken(dbResult.id)
            ctx.body = {
                token: token,
                userName: dbResult.adminUser,
                resCode: resCode.loginCode.success,
            }
        } else {
            ctx.body = {
                resCode: resCode.loginCode.error['密码错误'],
            }
        }
    } else {
        ctx.body = {
            resCode: resCode.loginCode.error['暂无用户'],
        }
    }
}
let getUserAvater = async (ctx, next) => {
    let adminUser = ctx.query.name,
        dbResult = await adminUserHelper.findOne({ adminUser });
    if (dbResult) {
        ctx.body = {
            resCode: resCode.loginCode.success,
            avater: dbResult.userInfo.avater
        }
    } else {
        ctx.body = {
            resCode: resCode.loginCode.error['暂无用户'],
        }
    }
}
module.exports = {
    adminLogin,
    getUserAvater
}