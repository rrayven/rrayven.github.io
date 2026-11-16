import { type JSX } from 'react';
import type { Section, Completion } from '../appConstants';

export default function Header ({ completion }: HeaderParams): JSX.Element {
    const states: JSX.Element[] = [];

    for (const section of Object.keys(completion)) {
        const sectionCompletion = completion[section as Section];

        states.push(
            <div className={`Section ${section}`}>
                {sectionCompletion.displayName}
                <span className={sectionCompletion.state} />
            </div>,
        );
    }

    return (
        <div className='Header'>
            {states}
        </div>
    );
}

interface HeaderParams {
    completion: Completion;
}
