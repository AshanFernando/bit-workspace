import { LinterTask, LinterTaskOptions } from '@teambit/defender.linter-task';
import { TaskHandler } from '@teambit/builder';
import { ESLintLinter } from './eslint-linter';
import { ESLintOptions } from './eslint-linter-options';

export type EslintTaskOptions = ESLintOptions &
  Pick<LinterTaskOptions, 'description'>;

/**
 * a task for a jest task.
 */
export const EslintTask = {
  from: (options: EslintTaskOptions): TaskHandler => {
    const name = options.name || 'EslintLint';
    const description =
      options.description || 'linting components using ESlint';
    return LinterTask.from({
      ...options,
      name,
      description,
      linter: ESLintLinter.from(options),
    });
  },
};
