import { Platform } from '@bitdev/platforms.platform';
import { KubernetesDeployer } from '@backend/kubernetes.kubernetes-deployer';
import { GKEAdapter } from '@backend/kubernetes.adapters.gke';

const UserServer = import.meta.resolve(
  '@backend/kubernetes.examples.user-server'
);
const DiscussionServer = import.meta.resolve(
  '@backend/kubernetes.examples.discussion-server'
);
const AcmeWeb = import.meta.resolve('@backend/kubernetes.examples.acme-web');
const PlatformGateway = import.meta.resolve(
  '@backend/kubernetes.examples.gateway-server'
);

export const AcmePlatform = Platform.from({
  name: 'platform',
  frontends: {
    main: AcmeWeb,
  },
  backends: {
    main: [
      PlatformGateway,
      {
        remoteUrl: 'http://gateway-server-service',
      },
    ],
    services: [
      [
        UserServer,
        // The remote URL here is the name of the service in the Kubernetes cluster
        // To use the remote service from your local dev environment, you can change the remote URL to a valid one.
        { name: 'user-server', remoteUrl: 'http://user-server-service' },
      ],
      [
        DiscussionServer,
        {
          name: 'discussion-server',
          remoteUrl: 'http://discussion-server-service',
        },
      ],
    ],
  },
  deploy: KubernetesDeployer.deploy({
    adapter: new GKEAdapter({
      clusterName: 'acme-platform',
      zone: 'us-central1',
      keyJson: process.env.K8S_GOOGLE_CLOUD,
    }),
    organization: 'bitdevcommunity',
  }),
});

export default AcmePlatform;
