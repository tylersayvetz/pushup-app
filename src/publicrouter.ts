import Router from 'koa-router'

const router = new Router()

router.get("/", (ctx, next) => {
    ctx.body = { msg: "hello public!"}
    next()
})

export default router