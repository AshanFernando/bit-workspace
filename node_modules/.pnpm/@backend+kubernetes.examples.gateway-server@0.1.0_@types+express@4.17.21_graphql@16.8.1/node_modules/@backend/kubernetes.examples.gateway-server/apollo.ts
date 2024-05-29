import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";
import express from "express";
import { createServer } from "node:http";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import type { ApplicationInstance } from "@teambit/application";

export async function run({
	services = [],
	port = 4000,
}: {
	services?: ApplicationInstance[];
	port?: number;
}) {
	const app = express();
	const httpServer = createServer(app);
	const gateway = new ApolloGateway({
		supergraphSdl: new IntrospectAndCompose({
			/**
			 * include all the running services in the super-graph.
			 */
			subgraphs: services.map((service) => {
				return {
					name: service.appName || "",
					url: service.url || `http://localhost:${service.port}/graphql`,
				};
			}),
		}),
	});
	const server = new ApolloServer({
		gateway,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});

	await server.start();

	app.use(
		cors<cors.CorsRequest>({
			origin(origin, callback) {
				callback(null, true);
			},
			credentials: true,
		}),
	);

	app.use(
		"/graphql",
		express.json(),
		// expressMiddleware accepts the same arguments:
		// an Apollo Server instance and optional configuration options
		expressMiddleware(server, {
			context: async ({ req }) => req,
		}),
	);

	// proxy all REST requests.
	for (const service of services) {
		app.use(
			`/${service.appName}`,
			createProxyMiddleware({
				proxyTimeout: 3000,
				timeout: 3000,
				target: service.url || `http://localhost:${service.port}/graphql`,
				changeOrigin: true,
				pathRewrite: { [`/${service.appName}/`]: "/" },
				onProxyRes: (proxyRes, _, res) => {
					if (proxyRes.statusCode === 404) {
						res.status(404);
						res.json({
							message: "no resource found",
						});
					}
				},
			}),
		);
	}

	app.get("/", (_, res) => {
		res.status(200);
		return res.json({
			message: "ok",
		});
	});

	app.get("*", (_, res) => {
		res.status(404);
		return res.json({
			message: "no resource found",
		});
	});

	await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

	return httpServer;
}
