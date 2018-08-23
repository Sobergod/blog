
/**
 * 成功码为1000-1050
 * 失败码为1050-1100
 */
let RESCODE = {
    // 通用码
    success: {
        status: 'ok',
        code: 1000
    },
    // 登录成功码
    LOGINCODE: {
        success: {
            status: 'login ok',
            code: 1001,
            tipMsg: '登录成功',
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
    REGISTERCODE: {
        success: {
            status: 'register ok',
            code: 1002,
            tipMsg: '注册成功',
        },
        error: {
            '用户存在': {
                status: 'login fail',
                code: 1061,
                tipMsg: '用户已存在',
            },
            '其他错误': {
                status: 'login fail',
                code: 1062,
                tipMsg: '注册失败',
            }
        }

    },
    // 秘钥相关码
    RSACODE: {
        '获取公钥': {
            success: {
                status: 'pubkey ok',
                code: 1021,
                tipMsg: '获取公钥成功',
            },
            error: {
                status: 'pubkey fail',
                code: 1071,
                tipMsg: '获取公钥失败',
            }
        },
        '修改秘钥': {
            success: {
                status: 'change key ok',
                code: 1022,
                tipMsg: '修改秘钥成功',
            },
            error: {
                status: 'change key fail',
                code: 1072,
                tipMsg: '修改秘钥失败',
            }
        },

    }
}
module.exports = {
    RESCODE
}