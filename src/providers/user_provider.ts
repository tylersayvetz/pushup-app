import { UserModel } from "../nedb/models/models";

export abstract class UserProvider {
    abstract findUserById(id: string): Promise<UserModel>;
}