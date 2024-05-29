import { NodeServer } from "@bitdev/node.node-server";
import { DockerDeploy, NodeDockerFile } from "@backend/docker.docker-deployer";

export default NodeServer.from({
	name: "user-server",
	mainPath: import.meta.resolve("./user-server.app-root.js"),
	deploy: DockerDeploy.deploy({
		org: "bitdevcommunity",

		pushOptions: {
			authconfig: {
				username: "bitdevcommunity",
				password: process.env.DOCKER_PASSWORD || "",
				serveraddress: "https://index.docker.io/v1",
			},
		},
		dockerfileTemplate: new NodeDockerFile(),
		entryFile: "user-server.cjs",
	}),
});
