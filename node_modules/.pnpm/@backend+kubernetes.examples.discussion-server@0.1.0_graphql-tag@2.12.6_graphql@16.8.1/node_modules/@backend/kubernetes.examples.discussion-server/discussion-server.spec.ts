import { DiscussionServer } from "./discussion-server.js";

describe('discussions server', () => {
    it('should return two discussions', async () => {
        const discussionServer = DiscussionServer.from();
        const discussions = await discussionServer.listDiscussions();
        expect(discussions.length).toEqual(2);
    });
});

