import { RoomModel } from "../nedb/models/models";
import { RoomProvider } from "../providers/room_provider";

export default class RoomService {
    private roomProvider: RoomProvider;

    constructor(roomProvider: RoomProvider) {
        this.roomProvider = roomProvider;
    }

    async findRoomByCode(roomCode: string): Promise<RoomModel> {
        return this.roomProvider.findRoomByCode(roomCode);
    }
}
