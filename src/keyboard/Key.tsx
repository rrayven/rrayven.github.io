import type { JSX } from 'react';
import type { Width, Height, KeyCode } from './constants';
import type { KeyMap } from './Keyboard';

export default function Key ({ width, height, code, name, register }: KeyParams): JSX.Element {
    register(code);

    return (
        <div className={`Key width-${width} height-${height}`}>
            <h2>{name}</h2>
        </div>
    );
}

interface KeyParams {
    width: Width;
    height: Height;
    code: KeyCode;
    name: string;
    register: (key: KeyCode) => KeyMap;
}
