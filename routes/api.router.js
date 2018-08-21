// 所有后台接口路由

const router = require('koa-router')()
const api = require('../app/api/controllers/login')
const token = require('../middleware/token/token')
const { createRsa, sendPubKey } = require('../middleware/rsa/rsa')
// const { cap1 } = require('../middleware/ccap/ccap')

router.prefix('/api/a')

router.get('/', token.checkToken, async (ctx, next) => {
    ctx.body = {
        title: '123'
    }
})
// 登录
router.post('/login', token.createToken, api.adminLogin)
// 获取用户头像
router.get('/avaimg', api.getUserAvater);
// 更换秘钥
router.get('/creatersa', createRsa);
// 发送公钥
router.get('/pubkey', sendPubKey);
module.exports = router