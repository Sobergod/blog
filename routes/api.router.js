// 所有接口路由
const router = require('koa-router')()
const api = require('../app/api/controllers/login')
const token = require('../middleware/token/token')
const { decrypted, sendPubKey } = require('../middleware/rsa/rsa')
const { cap1 } = require('../middleware/ccap/ccap')
router.prefix('/api/a')
router.get('/', token.checkToken, async (ctx, next) => {
    ctx.body = {
        title: '接口一'
    }
})
// 登录
router.post('/login', api.adminLogin)
// 获取用户头像
router.get('/avaimg', api.getUserAvater);
// 发送公钥
router.get('/pubkey', sendPubKey);
module.exports = router