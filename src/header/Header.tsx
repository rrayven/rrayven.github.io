import { type JSX } from 'react';
import type { Section, Completion } from '../appConstants';
import Translations from '../translations/enUS';

export default function Header ({ completion }: HeaderParams): JSX.Element {
    const states: JSX.Element[] = [];

    for (const section of Object.keys(completion) as Section[]) {
        const sectionCompletion = completion[section];

        states.push(
            <div className={`Section ${section}`}>
                {Translations[section].Name}
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
