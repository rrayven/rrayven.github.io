import { useState, type JSX } from 'react';
import type { KeyCode } from './logic/constants';

export type Keys = Set<KeyCode>;

export default function Keyboard (): JSX.Element {
    const [keys, setKeys] = useState<Keys>(() => new Set());
    /* eslint-disable react-x/use-state */
    const [pressed, setPressedState] = useState<Keys>(() => new Set());
    const [held, setHeldState] = useState<Keys>(() => new Set());
    /* eslint-enable react-x/use-state */

    const setPressed = (key: KeyCode, pressed = true): void => {
        setPressedState((previous: Keys): Keys => {
            const next = new Set(previous);

            if (pressed) next.add(key);
            else next.delete(key);

            return next;
        });
    };

    const register: RegisterKey = key => {
        setKeys((previous: Keys): Keys => {
            const next = new Set(previous);
            return next.add(key);
        });
    };

    const setHeld = (key: KeyCode, held = true): void => {
        setHeldState((previous: Keys): Keys => {
            const next = new Set(previous);

            if (held) next.add(key);
            else next.delete(key);

            return next;
        });
    };

    console.log(keys, register, pressed, setPressed, held, setHeld);

    return (
        <></>
    );
}

export type RegisterKey = (key: KeyCode) => void;
