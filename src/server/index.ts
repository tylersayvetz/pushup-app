import dotenv from "dotenv";
import Koa from "koa";
import api from "../api/index";

dotenv.config();
const { PORT } = process.env;

const server = new Koa();

server.use(api.routes());

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
