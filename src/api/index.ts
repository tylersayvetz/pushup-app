import logger from "koa-logger";
import json from "koa-json";

import jwt from "koa-jwt";
import Router from "koa-router";
import user from "./controllers/user";
import authenticate from "./controllers/authenticate";
import UserService from "../services/user_service";
import DbUserProvider from "../nedb/db_user_provider";
import RoomService from "../services/room_service";
import DbRoomProvider from "../nedb/db_room_provider";

const app = new Router();

/**
 * Providers
 */
const userProvider = new DbUserProvider();
const roomProvider = new DbRoomProvider();

/**
 * Services
 *  services *consume* providers.
 */
const services = {
    userService: new UserService(userProvider),
    roomService: new RoomService(roomProvider)
};

app.use(json());
app.use(logger());

// jwt middleware
// app.use(jwt({ secret: "getshredded" }));
// protected routes

authenticate(app, services);
user(app, services);

export default app;
