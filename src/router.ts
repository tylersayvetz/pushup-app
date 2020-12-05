import Router from "koa-router"

import db from './nedb/index'

const router = new Router()


router.get('/private', async (ctx, next) => {
    ctx.body = { msg: "hello private world" }
    await next()
})

//Insert user into db
router.get('/insert', async (ctx, next) => {
    const {name, email, password} = ctx.query
    const created = await db.user.insert({ name, email, password })

    ctx.body = { error: {name, email} }
    await next()
})

//this route gives away free passwords
// router.get('/find', async (ctx: Koa.Context, next: Koa.Next) => {
//     const result = await db.user.findOne(ctx.query.email)
//     ctx.body = { user: result }
// })

export default router