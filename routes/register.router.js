
/**
 * 注册路由
 * @author cjh
 */
const router = require('koa-router')()
const register = require('../app/controllers/register')
router.prefix('/register')

router.get('/', register.showIndex);
router.post('/a', register.register);
router.get('/success', register.success)
router.get('/error', register.error)
module.exports = router