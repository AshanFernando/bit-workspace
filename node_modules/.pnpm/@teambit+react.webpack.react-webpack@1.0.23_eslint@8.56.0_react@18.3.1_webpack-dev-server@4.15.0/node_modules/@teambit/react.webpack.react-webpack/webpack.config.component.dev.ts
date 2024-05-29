import '@bitdev/react.webpack.refresh-overlay';
import { Configuration } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const matchNothingRegex = 'a^';

export type ConfigComponentDevFactoryOptions = {
  envId: string;
  componentPathsRegExps: RegExp[];
};

export function configComponentDevFactory({
  envId,
  componentPathsRegExps,
}: ConfigComponentDevFactoryOptions): Configuration {
  return {
    plugins: [
      // No need here as we have `hot: true` in the dev server
      // new webpack.HotModuleReplacementPlugin({}),
      new ReactRefreshWebpackPlugin({
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
    snapshot: {
      ...(componentPathsRegExps && componentPathsRegExps.length > 0
        ? { managedPaths: componentPathsRegExps }
        : {}),
    },
  };
}
