export interface Completion {
    audio: CompletionValue;
    camera: CompletionValue;
    drivers: CompletionValue;
    keyboard: CompletionValue;
}

interface CompletionValue {
    state: State;
    displayName: string;
}

export const STATES = {
    UNKNOWN: 'unknown',
    FAILED: 'failed',
    PARTIAL: 'partial',
    PASSED: 'passed',
} as const;

export type State = typeof STATES[keyof typeof STATES];
export type Section = keyof Completion;
