import Nedb from "nedb-promises";
import config from "config";
import { UserModel } from "./models/models";
import { UserProvider } from "../providers/user_provider";

export default class DbUserProvider extends UserProvider {
    Users: Nedb;

    constructor() {
        super();
        this.Users = new Nedb(config.get("db.users"));
        this.Users.ensureIndex({
            fieldName: "email",
            unique: true
        });
    }

    async findUserById(id: string): Promise<UserModel> {
        const document = (await this.Users.findOne(id)) as UserModel;
        console.log(document);
        return document;
    }

    async insert(user: UserModel): Promise<Error | UserModel> {
        const document = await this.Users.insert(user);
        return document || new Error("error inserting");
    }

    /**
     *
     * @param email
     * @returns a user object or null, if no user was found.
     */
    async findOne(email: string, password?: string): Promise<UserModel | null> {
        const searchObj: any = { email };
        if (password) searchObj.password = password;

        const document = (await this.Users.findOne(searchObj)) as UserModel;
        console.log(document);
        return document;
    }

    async joinRoom(email: string, code: string): Promise<UserModel | null> {
        const document = (await this.Users.update(
            { email },
            { $set: { roomId: code } },
            { returnUpdatedDocs: true }
        )) as UserModel;
        return document;
    }
}
