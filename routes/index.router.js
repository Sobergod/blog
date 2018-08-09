const router = require('koa-router')()
const Index = require('../app/controllers/index')
const register = require('../app/controllers/register')
router.get('/', Index.title)
router.post('/login', Index.redirectRes)
router.get('/success', Index.success,register.register)
router.get('/error', Index.error)
router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
