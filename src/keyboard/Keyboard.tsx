import { useEffect, useRef, useState, type JSX } from 'react';
import type { KeyCode } from './logic/kbConstants';
import KBBuilder from './components/KBBuilder';
import { States } from '../appConstants';
import type { CommonParams } from '../App';
import genSpec from './logic/lenovo-spec';

export type Keys = Set<KeyCode>;

export default function Keyboard ({ setCompletion }: CommonParams): JSX.Element {
    const kbRef = useRef<HTMLDivElement>(null);
    const visible = useRef(false);

    const keys = useRef<Keys>(new Set());
    /* eslint-disable react-x/use-state */
    const [pressed, setPressedState] = useState<Keys>(() => new Set());
    const [held, setHeldState] = useState<Keys>(() => new Set());
    /* eslint-enable react-x/use-state */

    const setPressed = (key: KeyCode, pressed = true): void => {
        setPressedState((previous: Keys): Keys => {
            const next = new Set(previous);

            if (pressed) next.add(key);
            else next.delete(key);

            let complete = true;
            keys.current.forEach(key => { if (!next.has(key)) complete = false; });

            if (complete) setCompletion(States.PASSED);
            else if (next.size > 0) setCompletion(States.PARTIAL);

            return next;
        });
    };

    const register: RegisterKey = (key: KeyCode) => {
        keys.current.add(key);
    };

    const setHeld = (key: KeyCode, held = true): void => {
        setHeldState((previous: Keys): Keys => {
            const next = new Set(previous);

            if (held) next.add(key);
            else next.delete(key);

            return next;
        });
    };

    useEffect(() => {
        const keyboardDiv = kbRef.current;
        if (!keyboardDiv) return;

        const visibleObserver = new IntersectionObserver(
            ([entry]) => {
                visible.current = entry.isIntersecting;
            },
            { threshold: 0.2 },
        );

        visibleObserver.observe(keyboardDiv);

        const onKeyDown = (e: KeyboardEvent): void => {
            const code = e.code as KeyCode;
            if (!visible.current || !keys.current.has(code)) return;

            setPressed(code);
            setHeld(code);

            e.stopPropagation();
        };

        const onKeyUp = (e: KeyboardEvent): void => {
            const code = e.code as KeyCode;
            if (!keys.current.has(code)) return;

            setHeld(code, false);
        };

        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);

        return (): void => {
            visibleObserver.disconnect();
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
        };
    });

    return (
        <div ref={kbRef} className='Keyboard'>
            <KBBuilder kbSpec={genSpec()} register={register} pressedKeys={pressed} heldKeys={held} />
        </div>
    );
}

export type RegisterKey = (key: KeyCode) => void;
