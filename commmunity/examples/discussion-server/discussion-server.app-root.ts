import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { discussionServerSchema } from "./discussion-server.graphql.js";
import { DiscussionServer } from "./discussion-server.js";

export async function createDiscussionServer() {
	// ports are injects by Bit to `process.env.PORT`
	const port = parseInt(process.env.PORT, 10) || 3000;
	const discussionServer = DiscussionServer.from();

	const { typeDefs, resolvers } = discussionServerSchema(discussionServer);
	// The ApolloServer constructor requires two parameters: your schema
	// definition and your set of resolvers.
	const server = new ApolloServer({
		schema: buildSubgraphSchema({ typeDefs, resolvers }),
	});

	// Passing an ApolloServer instance to the `startStandaloneServer` function:
	//  1. creates an Express app
	//  2. installs your ApolloServer instance as middleware
	//  3. prepares your app to handle incoming requests
	const { url } = await startStandaloneServer(server, {
		listen: {
			port,
		},
	});

	console.log(`🚀  Server ready at: ${url}`);
}

export async function run() {
	return createDiscussionServer();
}
