import { Configuration } from 'webpack';
import WDS from 'webpack-dev-server';
export interface WebpackConfigWithDevServer extends Configuration {
    devServer: WDS.Configuration;
    favicon?: string;
}
