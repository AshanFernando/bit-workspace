import { BitError } from '@teambit/bit-error';
export default class InvalidScopeNameFromRemote extends BitError {
    constructor(scopeName: string);
}
