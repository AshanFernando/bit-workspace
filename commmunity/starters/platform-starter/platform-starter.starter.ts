import { WorkspaceContext, Starter } from '@teambit/generator';
import { workspaceConfig } from './template/files/workspace-config';
import { gitIgnore } from './template/files/git-ignore';

export const PlatformStarterWorkspaceStarter: Starter = {
  name: 'platform-starter-workspace',
  description: 'platform-starter workspace with kubernetes deployer',
  generateFiles: async (context: WorkspaceContext) => {
    const files = [
      {
        relativePath: 'workspace.jsonc',
        content: await workspaceConfig(context),
      },
    ];

    if (!context.skipGit) {
      files.push({
        relativePath: '.gitignore',
        content: gitIgnore(),
      });
    }

    return files;
  },
  fork: () => [
    {
      id: 'teambit.react/react-env-extension',
      targetName: 'envs/my-react-env',
    },
    {
      id: 'backend.kubernetes/examples/acme-web',
      targetName: 'examples/acme-web',
    },
    {
      id: 'backend.kubernetes/examples/discussion-server',
      targetName: 'examples/discussion-server',
    },
    {
      id: 'backend.kubernetes/examples/gateway-server',
      targetName: 'examples/gateway-server',
    },
    {
      id: 'backend.kubernetes/examples/platform',
      targetName: 'examples/platform',
    },
    {
      id: 'backend.kubernetes/examples/user-server',
      targetName: 'examples/user-server',
    },
  ],
};

export default PlatformStarterWorkspaceStarter;
