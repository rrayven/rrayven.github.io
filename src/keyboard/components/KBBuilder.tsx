import type { JSX, Ref } from 'react';
import type { KeyRowSpec } from './KeyRow';
import type { KeyParamCommon } from './Key';
import KeyRow from './KeyRow';

export default function KBBuilder ({ ref, kbSpec, register, pressedKeys, heldKeys }: KBBuilderParams): JSX.Element {
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
        <div ref={ref} className='Keyboard'>
            {generated}
        </div>
    );
}

export type KeyboardSpec = KeyRowSpec[];

type KBBuilderParams = {
    ref: Ref<HTMLDivElement> | undefined;
    kbSpec: KeyboardSpec;
} & KeyParamCommon;
