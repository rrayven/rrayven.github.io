import type { JSX } from 'react';
import type { Width, Height, KeyCode } from '../logic/kbConstants';
import type { RegisterKey, Keys } from '../Keyboard';

export default function Key ({ width, height, code, name, register, pressed, held }: KeyParams): JSX.Element {
    register(code);

    return (
        <div className={`Key width-${width} height-${height}${pressed ? ' pressed' : ''}${held ? ' held' : ''}`}>
            <h2>{name}</h2>
        </div>
    );
}

type KeyParams = KeySpec & {
    register: RegisterKey;
    pressed: boolean;
    held: boolean;
};

export interface KeySpec {
    width: Width;
    height: Height;
    code: KeyCode;
    name: string;
}

export interface KeyParamCommon {
    register: RegisterKey;
    pressedKeys: Keys;
    heldKeys: Keys;
}
