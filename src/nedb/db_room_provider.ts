import Nedb from "nedb-promises";
import config from "config";
import { generateRoomCode } from "../lib/util";
import { RoomModel } from "./models/models";
import { RoomProvider } from "../providers/room_provider";

export default class DbRoomProvider extends RoomProvider {
    Rooms: Nedb;

    constructor() {
        super();
        const options = config.get("db.rooms");
        this.Rooms = new Nedb(options);
        this.Rooms.ensureIndex({ fieldName: "code", unique: true });
    }

    /**
     *
     * @param code a 6-alhanumeric string identifying the room to the user.
     * @returns a room object or null.
     */

    async findRoomByCode(roomCode: string): Promise<RoomModel> {
        const document = (await this.Rooms.findOne({ code: roomCode })) as RoomModel;
        console.log("found: ", document);
        return document;
    }

    async insert(name: string): Promise<Error | RoomModel> {
        // generate code.
        let unique = false;
        let code: string;
        while (!unique) {
            code = generateRoomCode();
            // eslint-disable-next-line no-await-in-loop
            unique = (await this.findRoomByCode(code)) == null;
        }

        const room: RoomModel = { name, code };

        const document = await this.Rooms.insert(room);
        return document || new Error("error inserting");
    }
}
