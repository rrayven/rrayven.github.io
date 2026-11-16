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

export const Sections = {
    AUDIO: 'audio',
    CAMERA: 'camera',
    DRIVERS: 'drivers',
    KEYBOARD: 'keyboard',
} as const;

export const States = {
    UNKNOWN: 'unknown',
    FAILED: 'failed',
    PARTIAL: 'partial',
    PASSED: 'passed',
} as const;

export type State = typeof States[keyof typeof States];
export type Section = keyof Completion;
