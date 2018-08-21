const { RESCODE } = require('../../../config/message.map')
const adminUserHelper = require('../../../app/api/dbhelper/admin-user-helper')
const { decrypted } = require('../../../middleware/rsa/rsa')
let adminLogin = async (ctx, next) => {
    let adminUser = ctx.request.body.user;
    let password = await decrypted(ctx.request.body.password);
    let dbResult = await adminUserHelper.findOne({ adminUser });
    if (dbResult) {
        if (dbResult.password === password) {
            ctx.body = {
                token: ctx.state.token,
                userName: dbResult.adminUser,
                resCode: RESCODE.LOGINCODE.success,
            }
        } else {
            ctx.body = {
                resCode: RESCODE.LOGINCODE.error['密码错误'],
            }
        }
    } else {
        ctx.body = {
            resCode: RESCODE.LOGINCODE.error['暂无用户'],
        }
    }
}
let getUserAvater = async (ctx, next) => {
    let adminUser = ctx.query.name,
        dbResult = await adminUserHelper.findOne({ adminUser });
    if (dbResult) {
        ctx.body = {
            resCode: RESCODE.LOGINCODE.success,
            avater: dbResult.userInfo.avater
        }
    } else {
        ctx.body = {
            resCode: RESCODE.LOGINCODE.error['暂无用户'],
        }
    }
}
module.exports = {
    adminLogin,
    getUserAvater
}