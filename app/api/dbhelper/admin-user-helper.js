const AdminUser = require('../models/admin-user');

/**
 * 
 * 插入数据
 */
const insert = function (obj) {
    return new Promise((resolve, reject) => {
        const adminUser = new AdminUser(obj)
        adminUser.save((err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
}
/**
 * 查询一条数据
 */
const findOne = function (options) {
    return new Promise((resolve, reject) => {
        AdminUser.findOne(options, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
}
/**
 * 查所有
 */
const findAll = function (options) {
    return new Promise((resolve, reject) => {
        AdminUser.find(options, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
}
module.exports = {
    insert,
    findOne,
    findAll
}