"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colGridXl = exports.colGridLg = exports.colGridL = exports.colGridMd = exports.colGridSm = exports.colGridXs = exports.colGrid = void 0;
const grid_template_module_scss_1 = __importDefault(require("./grid-template.module.scss"));
exports.colGrid = makePreset('all');
exports.colGridXs = makePreset('xs');
exports.colGridSm = makePreset('sm');
exports.colGridMd = makePreset('md');
exports.colGridL = makePreset('l');
exports.colGridLg = makePreset('lg');
exports.colGridXl = makePreset('xl');
function makePreset(breakPoints) {
    const obj = {};
    for (var i = 1; i <= 12; i++) {
        obj[i] = grid_template_module_scss_1.default[`colTemplate--${breakPoints}-${i}`];
    }
    return obj;
}
//# sourceMappingURL=index.js.map