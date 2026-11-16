import type { JSX } from 'react';
import type { KeyParamCommon, KeySpec } from './Key';
import type { Keys, RegisterKey } from '../Keyboard';
import Key from './Key';

const KeyRow = ({ keyRowSpec, index, register, pressedKeys, heldKeys }: KeyRowParams): JSX.Element => (
    <div className={`Row parent-index-${index}`}>
        {genRow(keyRowSpec, register, pressedKeys, heldKeys)}
    </div>
);

function genRow (keyRowSpec: KeyRowSpec, register: RegisterKey, pressedKeys: Keys, heldKeys: Keys): JSX.Element[] {
    const generated: JSX.Element[] = [];

    for (let i = 0; i < keyRowSpec.length; i++) {
        if (Array.isArray(keyRowSpec[i])) {
            const out: JSX.Element[] = [];
            const keyMiniRow = keyRowSpec[i] as KeySpec[][];

            for (let rowIndex = 0; rowIndex < keyMiniRow.length; rowIndex++) {
                const row: JSX.Element[] = [];

                for (let j = 0; j < keyMiniRow[rowIndex].length; j++) {
                    const key = keyMiniRow[rowIndex][j];
                    row.push(genKey(key, register, pressedKeys, heldKeys, j));
                }

                out.push(
                    <div className={`MiniRow child-index-${rowIndex}`}>
                        {row}
                    </div>,
                );
            }

            generated.push(
                <div className='MiniRowGroup'>
                    {out}
                </div>,
            );
        } else {
            const key = keyRowSpec[i] as KeySpec;
            generated.push(genKey(key, register, pressedKeys, heldKeys, i));
        }
    }

    return generated;
}

function genKey (key: KeySpec, register: RegisterKey, pressedKeys: Keys, heldKeys: Keys, index: number): JSX.Element {
    const pressed = pressedKeys.has(key.code);
    const held = heldKeys.has(key.code);

    return (
        <Key
            height={key.height}
            width={key.width}
            code={key.code}
            name={key.name}
            register={register}
            pressed={pressed}
            held={held}
            key={index}
        />
    );
}

export default KeyRow;


// allows for rows within the row, specifically for the arrow/pgdown/pgup cluster
export type KeyRowSpec = (KeySpec | KeySpec[][])[];

type KeyRowParams = {
    keyRowSpec: KeyRowSpec;
    index: number;
} & KeyParamCommon;
