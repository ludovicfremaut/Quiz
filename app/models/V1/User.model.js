import client from "../../database/client.js";

export default class User {

    id;
    firstname;
    lastname;
    email;
    password;
    role;

    constructor(object) {
        this.id = object.id;
        this.firstname = object.firstname;
        this.lastname = object.lastname;
        this.email = object.email;
        this.password = object.password;
        this.role = object.role;
    }

    static async findAll() {
        const result = await client.query(`SELECT * FROM "user";`);
        const users = result.rows.map((user) => new User(user));
        return users;
    }

    static async findId(userId) {
        const sql = {
            text: `SELECT * FROM "user" WHERE id = $1;`,
            values: [userId],
        };

        const result = await client.query(sql);
        const user = new User(result.rows[0]);
        return user;
    }

    static async findEmail(userEmail) {
        const sql = {
            text: `SELECT * FROM "user" WHERE email = $1;`,
            values: [userEmail],
        };

        const result = await client.query(sql);
        const user = new User(result.rows[0]);
        return user;
    }
}