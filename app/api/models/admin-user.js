// 后台用户的数据模型
const mongoose = require('mongoose')
const adminUserSchema = new mongoose.Schema({
    adminUser: String,
    password: String,
    isAdmin: Boolean,
    userInfo: {
        avater: String,
        age: Number,
        sex: String,
        phone: Number,
    },
    time: { type: Date, default: Date.now },
})
module.exports = mongoose.model('adminUser', adminUserSchema);