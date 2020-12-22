
export interface UserModel {
     email: string;
    name: string;
    password: string;
    roomId: string | null;
}

export interface RoomModel {
    name: string;
    code: string;
}

export interface ExerciseModel {
    name: string;
    roomCode: string;
    users: {
        [key: string]: number
    }
} 

