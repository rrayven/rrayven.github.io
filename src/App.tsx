import { useState, type JSX } from 'react';
import Header from './header/Header';
import Keyboard from './keyboard/Keyboard';
import Audio from './audio/Audio';
import Camera from './camera/Camera';
import Drivers from './drivers/Drivers';
import genSpec from './keyboard/logic/lenovo-spec';
import { Sections, States, type Completion, type Section, type State } from './appConstants';

export default function App (): JSX.Element {
    const [completion, setCompletion] = useState(initCompletion);

    const setXCompletionFunc = (section: Section) => {
        return (state: State): void => {
            setCompletion((previous: Completion) => ({
                ...previous,
                [section]: { ...previous[section], state: state },
            }));
        };
    };

    return (
        <>
            <h1>
                Hello World
            </h1>
            <Header completion={completion} />
            <Keyboard setCompletion={setXCompletionFunc(Sections.KEYBOARD)} KBSpec={genSpec()} />
            <Audio />
            <Camera />
            <Drivers setCompletion={setXCompletionFunc(Sections.DRIVERS)} />
        </>
    );
}

const initCompletion: Completion = {
    AUDIO: { state: States.UNKNOWN },
    CAMERA: { state: States.UNKNOWN },
    DRIVERS: { state: States.UNKNOWN },
    KEYBOARD: { state: States.UNKNOWN },
};
