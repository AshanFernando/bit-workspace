import { WorkspaceContext, Starter } from '@teambit/generator';
import { workspaceConfig } from './template/files/workspace-config';
import { gitIgnore } from './template/files/git-ignore';

export const PlatformStarterWorkspaceStarter: Starter = {
  name: 'platform-starter',
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
      id: 'backend.kubernetes/examples/acme-web',
      targetName: 'frontend-services/acme-web',
    },
    {
      id: 'backend.kubernetes/examples/discussion-server',
      targetName: 'backend-services/discussion-server',
    },
    {
      id: 'backend.kubernetes/examples/user-server',
      targetName: 'backend-services/user-server',
    },
    {
      id: 'backend.kubernetes/examples/gateway-server',
      targetName: 'core/gateway-server',
    },
    {
      id: 'backend.kubernetes/examples/platform',
      targetName: 'core/platform',
    }
  ],
};

export default PlatformStarterWorkspaceStarter;
