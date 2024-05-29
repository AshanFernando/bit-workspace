import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { userServerSchema } from "./user-server.graphql.js";
import { UserServer } from "./user-server.js";

/**
 * bootstrap function for the server.
 */
export async function run() {
    // ports are injects by Bit to `process.env.PORT`
    const port = parseInt(process.env.PORT) || 3000;
    const userServer = UserServer.from();

    const { typeDefs, resolvers } = userServerSchema(userServer);
    // The ApolloServer constructor requires two parameters: your schema
    // definition and your set of resolvers.
    const server = new ApolloServer({
        schema: buildSubgraphSchema({ typeDefs, resolvers })
    });

    // Passing an ApolloServer instance to the `startStandaloneServer` function:
    //  1. creates an Express app
    //  2. installs your ApolloServer instance as middleware
    //  3. prepares your app to handle incoming requests
    const { url } = await startStandaloneServer(server, {
        listen: {
            port
        }
    });

    console.log(`🚀  Server ready at: ${url}`);

    return {
        port,
        // implement stop to support HMR.
        stop: async () => {
            await server.stop();
        }
    };
}

