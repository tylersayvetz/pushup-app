import { Context, Next } from "koa"
import jwt from 'jsonwebtoken'



export async function decodeJWT(ctx: Context, next: Next) {
    if (ctx.request.headers.authorization) {
        const rawToken = ctx.request.headers.authorization  
        const token = rawToken.split(' ')[1]
        const info = await jwt.decode(token)
        console.log("token info", info)
        ctx.jwtInfo = info


    }
    await next()
}

     












