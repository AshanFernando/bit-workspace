import { WorkspaceContext } from '@teambit/generator';
import { getWorkspaceConfigTemplateParsed, stringifyWorkspaceConfig } from '@teambit/config';

export async function workspaceConfig({ name, defaultScope }: WorkspaceContext) {
  const configParsed = await getWorkspaceConfigTemplateParsed();
  configParsed['teambit.workspace/workspace'].name = name;
  configParsed['teambit.workspace/workspace'].defaultScope = defaultScope || 'org.scope';
  configParsed['teambit.generator/generator'] = {
    envs: [
      'teambit.react/react-env',
      'teambit.node/node'
    ],
  };
  configParsed['teambit.workspace/variants'] = {
    '*': {},
  };
  configParsed[`${defaultScope}/frontend-services/acme-web`] = {};
  configParsed[`${defaultScope}/backend-services/discussion-server`] = {};
  configParsed[`${defaultScope}/backend-services/user-server`] = {};
  configParsed[`${defaultScope}/core/gateway-server`] = {};
  configParsed[`${defaultScope}/core/platform`] = {};
  
  return stringifyWorkspaceConfig(configParsed);
}
