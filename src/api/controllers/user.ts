import koaBody from "koa-body";
import Router from "koa-router";
import { decodeJWT } from "../middleware";
import { ControllerServices } from "../types";

export default function bind(router: Router, services: ControllerServices): void {
    router.get("/private", async (ctx, next) => {
        ctx.body = { msg: "hello private world" };
        await next();
    });

    router.post("/room", koaBody(), async (ctx, next) => {
        // todo: Not implemented
    });

    router.get("/join", decodeJWT, async (ctx, next) => {
        // not implemented
    });
}
