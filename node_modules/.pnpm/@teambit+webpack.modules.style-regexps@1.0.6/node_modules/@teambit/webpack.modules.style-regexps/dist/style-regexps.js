"use strict";
// style files regexps
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessModuleRegex = exports.lessNoModuleRegex = exports.lessRegex = exports.sassModuleRegex = exports.sassNoModuleRegex = exports.sassRegex = exports.cssModuleRegex = exports.cssNoModulesRegex = exports.cssRegex = void 0;
// css
exports.cssRegex = /\.css$/;
// css regex - will catch .css but not .module.css
exports.cssNoModulesRegex = /(?<!\.module)\.css$/;
exports.cssModuleRegex = /\.module\.css$/;
// sass | scss
exports.sassRegex = /\.(scss|sass)$/;
// scss|sass regex - will catch .scss|sass but not .module.scss|sass
exports.sassNoModuleRegex = /(?<!\.module)\.(scss|sass)$/;
exports.sassModuleRegex = /\.module\.(scss|sass)$/;
// less
exports.lessRegex = /\.less$/;
// less regex - will catch .less but not .module.less
exports.lessNoModuleRegex = /(?<!\.module)\.less$/;
exports.lessModuleRegex = /\.module\.less$/;
//# sourceMappingURL=style-regexps.js.map