import { User } from "@bitdev/node.examples.user";
import { userMock } from "./user-mock.js";

/**
 * user server
 */
export class UserServer {
    /**
     * list users.
     */
    async listUsers() {
        return userMock.map((plainUser) => {
            return User.from(plainUser);
        });
    }

    /**
     * create a new instance of a user server.
     */
    static from() {
        return new UserServer();
    }
}

