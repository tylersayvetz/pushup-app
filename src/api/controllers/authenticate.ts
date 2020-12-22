import jwt from "jsonwebtoken";
import koaBody from "koa-body";

import Router from "koa-router";
import db from "../../nedb";
import { ControllerServices } from "../types";

export default function bind(router: Router, services: ControllerServices): void {
    router.get("/public", async (ctx, next) => {
        ctx.body = { msg: "hello public!" };
    });

    router.post("/signup", koaBody(), async (ctx, next) => {
        // todo: not implemented
    });

    router.post("/signin", koaBody(), async (ctx, next) => {
        // todo
    });
}
