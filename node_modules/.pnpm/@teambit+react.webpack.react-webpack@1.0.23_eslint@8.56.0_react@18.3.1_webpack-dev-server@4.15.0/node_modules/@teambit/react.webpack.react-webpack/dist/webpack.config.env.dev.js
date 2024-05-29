"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configEnvDevFactory = void 0;
function configEnvDevFactory({ envId, }) {
    return {
        devServer: {
            webSocketServer: {
                options: {
                    path: `/_hmr/${envId}`,
                    // port is automatically matchs WDS
                },
            },
            client: {
                // public, sockHost, sockPath, and sockPort options were removed in favor client.webSocketURL option:
                webSocketURL: {
                    pathname: `_hmr/${envId}`,
                    // port is automatically matchs the website.
                },
                logging: 'error',
            },
        },
    };
}
exports.configEnvDevFactory = configEnvDevFactory;
//# sourceMappingURL=webpack.config.env.dev.js.map