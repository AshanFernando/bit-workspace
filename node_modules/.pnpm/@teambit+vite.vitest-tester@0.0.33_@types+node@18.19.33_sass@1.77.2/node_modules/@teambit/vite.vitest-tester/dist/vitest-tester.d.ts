import { Logger } from '@teambit/logger';
import { HarmonyWorker } from '@teambit/worker';
import { DependencyResolverMain } from '@teambit/dependency-resolver';
import { Tester, CallbackFn, TesterContext, Tests } from '@teambit/tester';
import { EnvHandler } from '@teambit/envs';
import type { VitestWorker } from './vitest.worker';
import { VitestOptions, VitestTesterOptions } from './vitest-options';
export declare class VitestTester implements Tester {
    readonly id: string;
    readonly configPath: string;
    private vitestWorker;
    private logger;
    private depResolver;
    private opts;
    constructor(id: string, configPath: string, vitestWorker: HarmonyWorker<VitestWorker>, logger: Logger, depResolver: DependencyResolverMain, opts?: VitestTesterOptions);
    static from(options: VitestOptions): EnvHandler<Tester>;
    displayName: string;
    version(): string;
    displayConfig(): string;
    private onTestRunCompleteCb;
    onTestRunComplete(callback: CallbackFn): Promise<void>;
    test(context: TesterContext): Promise<Tests>;
    watch(context: TesterContext): Promise<Tests>;
}
