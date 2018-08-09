'use strict'
const userHelper = require('../dbhelper/userHelper')
const DEFAULT_UESRNAME = '暂未登录';
/**
 * @param {*} ctx 
 * @param {*} next 
 * {String} name 用户名
 * {Strinh} passWord 密码
 */
var redirectRes = async (ctx, next) => {
    let name = ctx.request.body.userName;
    let passWord = ctx.request.body.userPassWord;
    let dbResults = await userHelper.find({ name });
    let age = 12;
    if (dbResults.length > 0) {
        ctx.body = '用户名已被注册'
    } else {
        dbResults = await userHelper.insert({ name, passWord, age })
        if (dbResults) {
            ctx.body = dbResults.name
        }
    }
}
var title = async (ctx, next) => {
    await ctx.render('index', {
        title: DEFAULT_UESRNAME
    });

};
var error = async (ctx, next) => {
    await ctx.render('error', {
        errorMsg: "登录失败!"
    });
};
var success = async (ctx, next) => {
    await ctx.render('success', {
        successMsg: "登录成功!"
    });
};
module.exports = {
    redirectRes,
    title,
    error,
    success
}