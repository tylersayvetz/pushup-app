import DbExerciseProvider from "./db_exercise_provider";
import DbRoomProvider from "./db_room_provider";
import Users from "./db_user_provider";

const db = {
    user: new Users(),
    room: new DbRoomProvider(),
    exercise: new DbExerciseProvider()
};

export default db;
