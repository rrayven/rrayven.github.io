export interface Completion {
    AUDIO: CompletionValue;
    CAMERA: CompletionValue;
    DRIVERS: CompletionValue;
    KEYBOARD: CompletionValue;
}

interface CompletionValue {
    state: State;
}

export const Sections = {
    AUDIO: 'AUDIO',
    CAMERA: 'CAMERA',
    DRIVERS: 'DRIVERS',
    KEYBOARD: 'KEYBOARD',
} as const;

export const States = {
    UNKNOWN: 'unknown',
    FAILED: 'failed',
    PARTIAL: 'partial',
    PASSED: 'passed',
} as const;

export type State = typeof States[keyof typeof States];
export type Section = keyof Completion;
