/// <reference types="node" />
declare type DumpMap = {
    [key: string]: [string, number, number];
};
declare type Dump = [Buffer[], DumpMap];
export declare class FileSystemBlobStore {
    private _memoryBlobs;
    private _invalidationKeys;
    private _dirty;
    private _storedMap;
    private _storedBlob;
    private _blobFilename;
    private _mapFilename;
    private _lockFilename;
    private _directory;
    constructor(directory: string, prefix: string);
    has(key: string, invalidationKey: string): boolean;
    get(key: string, invalidationKey: string): any;
    set(key: string, invalidationKey: string, buffer: Buffer): void;
    delete(key: string): void;
    isDirty(): boolean;
    save(): boolean;
    _getDump(): Dump;
}
export {};
