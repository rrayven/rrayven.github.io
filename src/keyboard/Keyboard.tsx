import { useState, type JSX } from 'react';
import type { KeyCode } from './constants';

export type KeyMap = Map<KeyCode, boolean>;

export default function Keyboard (): JSX.Element {
    const [keys, setKeys] = useState<KeyMap>(() => new Map());

    const setPressed = (key: KeyCode, pressed = true): void => {
        setKeys((previous: KeyMap): KeyMap => {
            const next = new Map(previous);
            return next.set(key, pressed);
        });
    };

    const registerKey = (key: KeyCode): void => {
        setPressed(key, false);
    };


    return (
        <></>
    );
}
