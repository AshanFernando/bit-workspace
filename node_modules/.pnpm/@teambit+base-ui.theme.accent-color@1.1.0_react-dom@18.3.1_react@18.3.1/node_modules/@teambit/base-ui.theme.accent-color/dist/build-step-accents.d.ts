export declare type BuildSteps = 'success' | 'failure' | 'pending' | 'processing' | 'skipped' | 'unknown';
export declare type BuildStepWithUppercase = BuildSteps | Uppercase<BuildSteps>;
export declare const buildStepPalette: Record<BuildStepWithUppercase, string>;
