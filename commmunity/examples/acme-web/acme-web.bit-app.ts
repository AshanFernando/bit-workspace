import { ReactSsr } from "@bitdev/react.app-types.react-ssr";
import { DockerDeploy, NodeDockerFile } from "@backend/docker.docker-deployer";

export default ReactSsr.from({
	name: "acme-web",

	ssr: true,

	serverRoot: "server.app-root.js",
	clientRoot: "acme-web.app-root.js",

	deploy: DockerDeploy.deploy({
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
	}),
});
