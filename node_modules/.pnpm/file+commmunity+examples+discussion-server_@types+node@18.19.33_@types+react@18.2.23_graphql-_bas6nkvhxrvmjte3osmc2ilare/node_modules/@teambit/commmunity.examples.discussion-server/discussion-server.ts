import { Discussion, mockDiscussions } from "@acme/discussions.entities.discussion";

/**
 * discussions server
 */
export class DiscussionServer {
    /**
     * say hello.
     */
    async listDiscussions(): Promise<Discussion[]> {
        const discussions = mockDiscussions();
        return discussions.map((plainDiscussion) => {
            return Discussion.from(plainDiscussion);
        });
    }

    /**
     * create a new instance of a discussions server.
     */
    static from() {
        return new DiscussionServer();
    }
}

