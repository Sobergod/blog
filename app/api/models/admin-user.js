// 后台用户的数据模型
const mongoose = require('mongoose')
const adminUserSchema = new mongoose.Schema({
    adminUser: String,
    password: String,
    userInfo: {
        avater: String,
        age: Number,
        sex: String,
    },
    time: { type: Date, default: Date.now },
})
module.exports = mongoose.model('adminUser', adminUserSchema);