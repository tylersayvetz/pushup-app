import { RoomModel } from "../nedb/models/models";

export abstract class RoomProvider {
    abstract findRoomByCode(roomCode: string): Promise<RoomModel>;
}
