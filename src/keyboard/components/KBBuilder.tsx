import type { JSX } from 'react';
import type { KeyRowSpec } from './KeyRow';
import type { KeyParamCommon } from './Key';

export default function KBBuilder ({ kbspec, register, pressedKeys, heldKeys }: KBBuilderParams): JSX.Element {
    console.log(kbspec, register, pressedKeys, heldKeys);

    return (
        <></>
    );
}

export type KeyboardSpec = KeyRowSpec[];

type KBBuilderParams = {
    kbspec: KeyboardSpec;
} & KeyParamCommon;
