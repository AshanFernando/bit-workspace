import { ok } from "node:assert";
import { UserServer } from "./user-server.js";

describe('user server', () => {
    it('should list two users', async () => {
        const userServer = UserServer.from();
        const users = await userServer.listUsers();
        ok(users.length === 2);
    });
});

