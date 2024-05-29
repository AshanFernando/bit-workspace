"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configComponentDevFactory = void 0;
require("@bitdev/react.webpack.refresh-overlay");
const react_refresh_webpack_plugin_1 = __importDefault(require("@pmmmwh/react-refresh-webpack-plugin"));
const matchNothingRegex = 'a^';
function configComponentDevFactory({ envId, componentPathsRegExps, }) {
    return {
        plugins: [
            // No need here as we have `hot: true` in the dev server
            // new webpack.HotModuleReplacementPlugin({}),
            new react_refresh_webpack_plugin_1.default({
                overlay: {
                    sockPath: `_hmr/${envId}`,
                    // TODO - react-error-overlay not showing runtime errors - https://github.com/teambit/bit/issues/5452
                    // @bit-ignore
                    entry: require.resolve('@bitdev/react.webpack.refresh-overlay/webpackHotDevClient'),
                    // @bit-ignore
                    module: require.resolve('@bitdev/react.webpack.refresh-overlay/refreshOverlayInterop'),
                },
                // we use '@pmmmwh/react-refresh-webpack-plugin/loader' directly where relevant.
                // FYI, original defaults of the plugin are:
                // include: /\.([cm]js|[jt]sx?|flow)$/i, exclude: /node_modules/,
                include: matchNothingRegex,
            }),
        ],
        snapshot: Object.assign({}, (componentPathsRegExps && componentPathsRegExps.length > 0
            ? { managedPaths: componentPathsRegExps }
            : {})),
    };
}
exports.configComponentDevFactory = configComponentDevFactory;
//# sourceMappingURL=webpack.config.component.dev.js.map