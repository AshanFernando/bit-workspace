"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EslintTask = void 0;
const defender_linter_task_1 = require("@teambit/defender.linter-task");
const eslint_linter_1 = require("./eslint-linter");
/**
 * a task for a jest task.
 */
exports.EslintTask = {
    from: (options) => {
        const name = options.name || 'EslintLint';
        const description = options.description || 'linting components using ESlint';
        return defender_linter_task_1.LinterTask.from(Object.assign(Object.assign({}, options), { name,
            description, linter: eslint_linter_1.ESLintLinter.from(options) }));
    },
};
//# sourceMappingURL=eslint-task.js.map