/**
 * 注册模块的控制器
 * @author cjh
 */
var showIndex = async (ctx, next) => {
    await ctx.render('register', {
        title: "用户注册",
    })
}
var register = async (ctx, next) => {
    let name = ctx.request.body.userName,
        email = ctx.request.body.userEmail,
        phone = ctx.request.body.userPhone,
        password = ctx.request.body.userPassWord,
        gender = ctx.request.body.userGender,
        age = ctx.request.body.userAge;
    ctx.response.redirect('/register/success');

}
var success = async (ctx, next) => {
    await ctx.render('success', {
        successMsg: "注册成功",
    })
}
var error = async (ctx, next) => {
    await ctx.render('error', {
        errorMsg: "注册失败",
    })
}
module.exports = {
    showIndex,
    register,
    success,
    error
}