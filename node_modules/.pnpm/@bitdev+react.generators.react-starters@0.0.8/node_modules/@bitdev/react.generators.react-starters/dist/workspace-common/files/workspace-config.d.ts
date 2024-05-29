import { WorkspaceContext } from '@teambit/generator';
export declare function workspaceConfig({ name, defaultScope, aspectComponent }: WorkspaceContext, extraConfig?: Record<string, any>, additionalEnvs?: string[]): Promise<string>;
