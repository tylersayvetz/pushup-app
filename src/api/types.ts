import RoomService from "../services/room_service";
import UserService from "../services/user_service";

export interface ControllerServices {
    userService: UserService;
    roomService: RoomService; // LOL
}
