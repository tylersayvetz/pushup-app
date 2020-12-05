import Koa from "koa"
import logger from "koa-logger"
import json from "koa-json"

import api from './router'
import publicRouter from './publicrouter'

import jwt from "koa-jwt"

const app = new Koa()

app.use(json())
app.use(logger())

//public routes
app.use(publicRouter.routes()).use(api.allowedMethods())
//jwt middleware
app.use(jwt({ secret: 'getshredded' }))
//protected routes
app.use(api.routes()).use(api.allowedMethods())

app.listen(3000, () => {
    console.log('listening on port.')
})
