
/**
 * 成功码为1000-1050
 * 失败码为1050-1100
 */
let resCode = {
    // 通用码
    success: {
        status: 'ok',
        code: 1000
    },
    // 登录成功码
    loginCode: {
        success: {
            status: 'login ok',
            code: 1001,
        },
        error: {
            '暂无用户': {
                status: 'login fail',
                code: 1051,
                tipMsg: '查无此人,快去注册',
            },
            '密码错误': {
                status: 'login fail',
                code: 1052,
                tipMsg: '密码错误',
            }
        }

    },
    // 注册成功码
    registerSuccess: {
        status: 'register ok',
        code: 1002
    },
}
module.exports = {
    resCode
}