import Nedb from 'nedb-promises'

interface User {
    email: string;
    name: string;
    password: string;
}


export default class Users {
    Users: Nedb;


    constructor() {
        this.Users = new Nedb({filename: './db/users.db', autoload: true}) 
    }

    async insert(user: User): Promise<Error | User> {
        const document = await this.Users.insert(user)
        return document ? document : new Error('error inserting')
    }
    /**
     * 
     * @param email 
     * @returns a user object or null, if no user was found.
     */
    async findOne(email: string): Promise<User | Error> {
        //TODO fix type assertion?
        const document = await this.Users.findOne({ email: email }) as User
        console.log(document)
        return document
    }
}
