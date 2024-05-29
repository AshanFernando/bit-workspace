import { BitError } from '@teambit/bit-error';

export class MissingEslintConfig extends BitError {
  constructor() {
    super(
      'eslint config not found. You must provide either a path to a valid `eslint config file` or set `config`'
    );
  }
}
