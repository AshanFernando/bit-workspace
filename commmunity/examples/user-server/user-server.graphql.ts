import { gql } from "graphql-tag";
import { DocumentNode } from "graphql";
import { GraphQLResolverMap } from "@apollo/subgraph/dist/schema-helper";
import { UserServer } from "./user-server.js";

export type ServerSchema = {
    typeDefs: DocumentNode;
    resolvers: GraphQLResolverMap;
};

export function userServerSchema(userServer: UserServer): ServerSchema {
    const typeDefs = gql `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "User" type defines the queryable fields for every user in our data source.
  type User {
    username: String
    displayName: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "users" query returns an array of zero or more Users (defined above).
  type Query {
    users: [User]
  }
`;

    const resolvers = {
        Query: {
            users: async () => {
                const users = await userServer.listUsers();
                return users.map((user) => user.toObject());
            },
        },
    };

    return {
        typeDefs,
        resolvers
    };
}

