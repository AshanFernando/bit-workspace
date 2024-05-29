import { set } from 'lodash';
import { ESLint as ESLintLib, Linter as ESLinter } from 'eslint';
import { LinterContext } from '@teambit/linter';
import { MissingEslintConfig } from './exceptions/missing-eslint-config';
import { ESLintOptions } from './eslint-linter-options';

export type ComputeEslintConfigOptions = Pick<
  ESLintOptions,
  'configPath' | 'config' | 'extensions' | 'pluginsPath'
>;

export function computeEslintConfig({
  configPath,
  config,
  extensions,
  pluginsPath,
}: ComputeEslintConfigOptions): ESLintLib.Options {
  if (!config && !configPath) {
    throw new MissingEslintConfig();
  }
  if (config) return config;

  const eslintConfigContent: ESLinter.Config = configPath
    // eslint-disable-next-line import/no-dynamic-require,global-require
    ? require(configPath)
    : undefined;
  return {
    overrideConfig: eslintConfigContent,
    extensions,
    useEslintrc: false,
    cwd: pluginsPath,
  };
}

export function computeRuntimeEslintConfig(
  options: ESLintLib.Options,
  context: LinterContext,
  tsConfigPath?: string
): ESLintLib.Options {
  const runtimeOptions: ESLintLib.Options = {
    fix: !!context.fix,
    fixTypes: context.fixTypes,
  };

  const withFix = { ...options, ...runtimeOptions };
  set(withFix, 'overrideConfig.parserOptions.project', tsConfigPath);
  return withFix;
}
