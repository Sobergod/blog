const { RESCODE } = require('../../../config/message.map')
const adminUserHelper = require('../../../app/api/dbhelper/admin-user-helper')
const { decrypted } = require('../../../middleware/rsa/rsa')
let adminRegister = async (ctx, next) => {
    let userFrom = ctx.request.body.userFrom,
        admin = {},
        userInfo = {};
    admin.adminUser = userFrom.user;
    admin.password = userFrom.passwd;
    admin.isAdmin = true;
    userInfo.age = userFrom.age;
    userInfo.sex = userFrom.sex;
    userInfo.phone = userFrom.phone;
    admin.userInfo = userInfo;
    let hasUser = await adminUserHelper.findOne({ "adminUser": userFrom.user });
    if (!hasUser) {
        let dbresult = await adminUserHelper.insert(admin);
        console.log(dbresult);
        ctx.body = {
            message: "成"
        }
    } else {
        ctx.body = {
            message: "已存在"
        }
    }

}
module.exports = {
    adminRegister
}