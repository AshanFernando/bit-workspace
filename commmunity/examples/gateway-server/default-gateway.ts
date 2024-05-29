import {
	ApplicationInstance,
	AppBuildContext,
	AppBuildResult,
	AppDeployContext,
} from "@teambit/application";
import { join, relative } from "path";
import { writeFile, mkdir } from "fs/promises";
import * as esbuild from "esbuild";
import dedent from "dedent";
import { DockerDeploy, NodeDockerFile } from "@backend/docker.docker-deployer";
import { GatewayContext, GatewayServer } from "./gateway-server.js";
import { run } from "./apollo.js";

export type StartGatewayOptions = {
	/**
	 * port the range.
	 */
	port?: number;

	/**
	 * X-Auth
	 */
	platformHeaders?: Record<string, string>;
};

export class DefaultGateway implements GatewayServer {
	name = "gateway-server";

	/**
	 * run the symphony gateway.
	 */
	async run(context: GatewayContext): Promise<ApplicationInstance> {
		const port = Number.parseInt(process.env.PORT) || context.port || 3000;
		if (!context.services.length) return { port };

		const httpServer = await run({ services: context.services, port });

		return {
			port,
			// @ts-ignore until releasing bit
			stop: async () => {
				httpServer.closeAllConnections();
				httpServer.close();
			},
		};
	}

	async build(context: AppBuildContext): Promise<AppBuildResult> {
		const capsulePath = context.capsule.path;
		const artifactsDir = join(capsulePath, "artifacts", "app-bundle");

		await mkdir(artifactsDir, { recursive: true });

		const apolloFile = join(capsulePath, "dist", "apollo.js");

		await esbuild.build({
			entryPoints: [apolloFile],
			outfile: join(artifactsDir, "main.cjs"),
			platform: "node",
			format: "cjs",
			bundle: true,
			minify: true,
			sourcemap: "linked",
			sourcesContent: true,
		});

		// The BIT_SERVICES environment variable is set by the platform deployer
		// it contains an array of services that the gateway should connect to.
		const entryFile = dedent`const main = require('./main.cjs');
			const services = process.env.BIT_SERVICES;
			console.log('services', services);
			module.exports = {
			run: () =>
				main.run({
					services: services ? JSON.parse(services) : [],
					port: process.env.PORT || 3000,
				}),
			};`;

		await writeFile(join(artifactsDir, "server.cjs"), entryFile);

		return {
			artifacts: [
				{
					name: "app-bundle",
					context: "component",
					description: "esbuild app bundle",
					generatedBy: "teambit.commmunity/examples/gateway-server",
					globPatterns: ["artifacts/app-bundle/**"],
				},
			],
			metadata: {
				publicDir: relative(capsulePath, artifactsDir),
			},
		};
	}

	deploy(context: AppDeployContext) {
		return DockerDeploy.deploy({
			org: "bitdevcommunity",

			buildOptions: {
				platform: "linux/amd64",
			},
			pushOptions: {
				authconfig: {
					username: "bitdevcommunity",
					password: process.env.DOCKER_PASSWORD || "",
					serveraddress: "https://index.docker.io/v1",
				},
			},
			dockerfileTemplate: new NodeDockerFile(),
			entryFile: "server.cjs",
		})(context);
	}
}
