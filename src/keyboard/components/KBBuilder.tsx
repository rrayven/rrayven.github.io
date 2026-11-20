import type { JSX } from 'react';
import type { KeyRowSpec } from './KeyRow';
import type { KeyParamCommon } from './Key';
import KeyRow from './KeyRow';

export default function KBBuilder ({ kbSpec, register, pressedKeys, heldKeys }: KBBuilderParams): JSX.Element {
    const generated: JSX.Element[] = [];

    for (let i = 0; i < kbSpec.length; i++) {
        const keyRowSpec = kbSpec[i];
        generated.push(
            <KeyRow
                keyRowSpec={keyRowSpec}
                index={i}
                register={register}
                pressedKeys={pressedKeys}
                heldKeys={heldKeys}
            />,
        );
    }

    return (
        <div className='Display'>
            {generated}
        </div>
    );
}

export type KeyboardSpec = KeyRowSpec[];

type KBBuilderParams = {
    kbSpec: KeyboardSpec;
} & KeyParamCommon;
