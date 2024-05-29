import { Bundler, BundlerContext, DevServer, DevServerContext } from '@teambit/bundler';
import 'webpack-dev-server';
import 'webpack';
import { EnvHandler } from '@teambit/envs';
import { EnvPreviewConfig, Preview } from '@teambit/preview';
import { WebpackConfigTransformer } from '@teambit/webpack';
import { Workspace } from '@teambit/workspace';
import { ReactPreviewOptions } from './react-preview-config';
export declare class ReactPreview implements Preview {
    readonly name: string;
    protected mounter: string;
    protected docsTemplate: string;
    protected previewConfig: EnvPreviewConfig;
    protected transformers: WebpackConfigTransformer[];
    protected workspace: Workspace;
    protected hostDependencies?: string[];
    protected devServer?: DevServer;
    protected bundler?: Bundler;
    protected webpackModulePath: string;
    protected webpackDevServerModulePath: string;
    constructor(name: string, mounter: string, docsTemplate: string, previewConfig: EnvPreviewConfig, transformers: WebpackConfigTransformer[], workspace: Workspace, hostDependencies?: string[], devServer?: DevServer, bundler?: Bundler, webpackModulePath?: string, webpackDevServerModulePath?: string);
    /**
     * Default host dependencies for the react preview.
     */
    static hostDependencies: string[];
    getDevServer(context: DevServerContext): EnvHandler<DevServer>;
    getDevEnvId(): string;
    getBundler(context: BundlerContext): EnvHandler<Bundler>;
    getTemplateBundler(context: BundlerContext): EnvHandler<Bundler>;
    getHostDependencies(): string[];
    getMounter(): string;
    getDocsTemplate(): string;
    getPreviewConfig(): EnvPreviewConfig;
    static from(options: ReactPreviewOptions): EnvHandler<ReactPreview>;
}
