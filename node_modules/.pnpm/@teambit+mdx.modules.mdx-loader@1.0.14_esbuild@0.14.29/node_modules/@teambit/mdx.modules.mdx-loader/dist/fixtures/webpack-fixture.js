"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bundleFixture = void 0;
const path_1 = __importDefault(require("path"));
const webpack_1 = __importDefault(require("webpack"));
const memory_fs_1 = __importDefault(require("memory-fs"));
function bundleFixture(fixturePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const fixture = `./${fixturePath}`;
        const compiler = (0, webpack_1.default)({
            mode: 'development',
            context: __dirname,
            entry: `./${fixturePath}`,
            output: {
                path: path_1.default.resolve(__dirname),
                filename: 'bundle.js'
            },
            node: false,
            module: {
                rules: [
                    {
                        test: /\.mdx?$/,
                        use: [
                            {
                                loader: require.resolve('babel-loader'),
                                options: {
                                    babelrc: true,
                                    configFile: true,
                                    presets: [require.resolve('@babel/preset-env'), require.resolve('@babel/preset-react')]
                                }
                            },
                            {
                                loader: require.resolve(path_1.default.join(__dirname, '..'))
                            }
                        ]
                    }
                ]
            }
        });
        compiler.outputFileSystem = new memory_fs_1.default();
        return new Promise((resolve, reject) => {
            compiler.run((err, stats) => {
                if (err)
                    return reject(err);
                if (!stats)
                    return reject(new Error('no modules compiled'));
                if (stats.hasErrors())
                    return reject(stats.compilation.errors);
                const json = stats.toJson({ source: true });
                const modules = json.modules;
                if (!modules) {
                    return reject(new Error('no modules compiled'));
                }
                const module = modules.find(m => { var _a; return (_a = m === null || m === void 0 ? void 0 : m.name) === null || _a === void 0 ? void 0 : _a.startsWith(fixture); });
                if (!module) {
                    return reject(new Error('module not found'));
                }
                return resolve(module);
            });
        });
    });
}
exports.bundleFixture = bundleFixture;
//# sourceMappingURL=webpack-fixture.js.map