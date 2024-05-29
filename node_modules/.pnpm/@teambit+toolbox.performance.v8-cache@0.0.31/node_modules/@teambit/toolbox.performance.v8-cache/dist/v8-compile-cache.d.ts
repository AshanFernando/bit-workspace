import { FileSystemBlobStore } from './file-system-blob-store';
declare global {
    namespace NodeJS {
        interface Global {
            _v8CompileCache: {
                previousModuleCompile: ((content: string, filename: string) => any) | null;
                cachedModuleCompile: ((content: string, filename: string) => any) | null;
            };
        }
    }
}
export declare class NativeCompileCache {
    private _cacheStore;
    constructor(blobStore: FileSystemBlobStore);
    setCacheStore(cacheStore: FileSystemBlobStore): void;
    install(): void;
    static uninstall(): void;
    _moduleCompile(filename: string, content: string): any;
}
export declare let nativeCompileCache: NativeCompileCache | null;
