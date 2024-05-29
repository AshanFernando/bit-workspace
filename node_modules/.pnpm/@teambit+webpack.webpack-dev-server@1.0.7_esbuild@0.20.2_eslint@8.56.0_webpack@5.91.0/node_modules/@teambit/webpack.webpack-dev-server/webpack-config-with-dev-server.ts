import { Configuration } from 'webpack';
import WDS from 'webpack-dev-server';

export interface WebpackConfigWithDevServer extends Configuration {
  devServer: WDS.Configuration;
  // TODO: check why favicon is here?
  favicon?: string;
}
