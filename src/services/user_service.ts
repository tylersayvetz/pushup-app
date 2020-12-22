import { UserModel } from "../nedb/models/models";
import { UserProvider } from "../providers/user_provider";

export default class UserService {
    userProvider: UserProvider;

    constructor(userProvider: UserProvider) {
        this.userProvider = userProvider;
    }

    async findUserById(userId: string): Promise<UserModel> {
        return this.userProvider.findUserById(userId);
    }
}
