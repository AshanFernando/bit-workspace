"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemBlobStore = void 0;
// Copied from https://github.com/zertosh/v8-compile-cache
const fs_1 = require("fs");
const path_1 = __importStar(require("path"));
const hasOwnProperty = Object.prototype.hasOwnProperty;
// https://github.com/substack/node-mkdirp/blob/f2003bb/index.js#L55-L98
function mkdirpSync(p_) {
    _mkdirpSync(path_1.default.resolve(p_), 0o777);
}
function _mkdirpSync(p, mode) {
    try {
        (0, fs_1.mkdirSync)(p, mode);
    }
    catch (err0) {
        if (err0.code === 'ENOENT') {
            _mkdirpSync(path_1.default.dirname(p));
            _mkdirpSync(p);
        }
        else {
            try {
                const stat = (0, fs_1.statSync)(p);
                if (!stat.isDirectory()) {
                    throw err0;
                }
            }
            catch (err1) {
                throw err0;
            }
        }
    }
}
// https://github.com/zertosh/slash-escape/blob/e7ebb99/slash-escape.js
function slashEscape(str) {
    const ESCAPE_LOOKUP = {
        '\\': 'zB',
        ':': 'zC',
        '/': 'zS',
        '\x00': 'z0',
        z: 'zZ',
    };
    const ESCAPE_REGEX = /[\\:/\x00z]/g; // eslint-disable-line no-control-regex
    return str.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
class FileSystemBlobStore {
    constructor(directory, prefix) {
        const name = prefix ? slashEscape(`${prefix}.`) : '';
        this._blobFilename = (0, path_1.join)(directory, `${name}BLOB`);
        this._mapFilename = (0, path_1.join)(directory, `${name}MAP`);
        this._lockFilename = (0, path_1.join)(directory, `${name}LOCK`);
        this._directory = directory;
        try {
            this._storedBlob = (0, fs_1.readFileSync)(this._blobFilename);
            this._storedMap = JSON.parse((0, fs_1.readFileSync)(this._mapFilename, { encoding: 'utf8' }));
        }
        catch (e) {
            this._storedBlob = Buffer.alloc(0);
            this._storedMap = {};
        }
        this._dirty = false;
        this._memoryBlobs = {};
        this._invalidationKeys = {};
    }
    has(key, invalidationKey) {
        if (hasOwnProperty.call(this._memoryBlobs, key)) {
            return this._invalidationKeys[key] === invalidationKey;
        }
        if (hasOwnProperty.call(this._storedMap, key)) {
            return this._storedMap[key][0] === invalidationKey;
        }
        return false;
    }
    get(key, invalidationKey) {
        if (hasOwnProperty.call(this._memoryBlobs, key)) {
            if (this._invalidationKeys[key] === invalidationKey) {
                return this._memoryBlobs[key];
            }
        }
        else if (hasOwnProperty.call(this._storedMap, key)) {
            const mapping = this._storedMap[key];
            if (mapping[0] === invalidationKey) {
                return this._storedBlob.slice(mapping[1], mapping[2]);
            }
        }
        return undefined;
    }
    set(key, invalidationKey, buffer) {
        this._invalidationKeys[key] = invalidationKey;
        this._memoryBlobs[key] = buffer;
        this._dirty = true;
    }
    delete(key) {
        if (hasOwnProperty.call(this._memoryBlobs, key)) {
            this._dirty = true;
            delete this._memoryBlobs[key];
        }
        if (hasOwnProperty.call(this._invalidationKeys, key)) {
            this._dirty = true;
            delete this._invalidationKeys[key];
        }
        if (hasOwnProperty.call(this._storedMap, key)) {
            this._dirty = true;
            delete this._storedMap[key];
        }
    }
    isDirty() {
        return this._dirty;
    }
    save() {
        const dump = this._getDump();
        const blobToStore = Buffer.concat(dump[0]);
        const mapToStore = JSON.stringify(dump[1]);
        try {
            mkdirpSync(this._directory);
            (0, fs_1.writeFileSync)(this._lockFilename, 'LOCK', { flag: 'wx' });
        }
        catch (error) {
            // Swallow the exception if we fail to acquire the lock.
            return false;
        }
        try {
            (0, fs_1.writeFileSync)(this._blobFilename, blobToStore);
            (0, fs_1.writeFileSync)(this._mapFilename, mapToStore);
        }
        finally {
            (0, fs_1.unlinkSync)(this._lockFilename);
        }
        return true;
    }
    _getDump() {
        const buffers = [];
        const newMap = {};
        let offset = 0;
        function push(key, invalidationKey, buffer) {
            buffers.push(buffer);
            newMap[key] = [invalidationKey, offset, offset + buffer.length];
            offset += buffer.length;
        }
        for (const key of Object.keys(this._memoryBlobs)) {
            const buffer = this._memoryBlobs[key];
            const invalidationKey = this._invalidationKeys[key];
            push(key, invalidationKey, buffer);
        }
        for (const key of Object.keys(this._storedMap)) {
            if (!hasOwnProperty.call(newMap, key)) {
                const mapping = this._storedMap[key];
                const buffer = this._storedBlob.slice(mapping[1], mapping[2]);
                push(key, mapping[0], buffer);
            }
        }
        return [buffers, newMap];
    }
}
exports.FileSystemBlobStore = FileSystemBlobStore;
//# sourceMappingURL=file-system-blob-store.js.map