
// user的数据模型
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String,
    passWord: String,
    age: Number,
    time: { type: Date, default: Date.now },
})
module.exports = mongoose.model('user', userSchema);