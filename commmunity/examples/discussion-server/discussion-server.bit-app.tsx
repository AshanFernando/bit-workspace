import { DockerDeploy, NodeDockerFile } from '@backend/docker.docker-deployer';
import { NodeApp } from '@bitdev/node.node-app';

export default NodeApp.from({
  name: 'discussion-server',
  artifactName: 'discussion-service',
  mainPath: import.meta.resolve('./discussion-server.app-root.js'),
  deploy: DockerDeploy.deploy({
    org: 'bitdevcommunity',

    pushOptions: {
      authconfig: {
        username: 'bitdevcommunity',
        password: process.env.DOCKER_PASSWORD || '',
        serveraddress: 'https://index.docker.io/v1',
      },
    },
    dockerfileTemplate: new NodeDockerFile(),
    entryFile: 'discussion-server.cjs',
  }),
});
