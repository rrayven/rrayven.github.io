import { useState, type JSX } from 'react';
import Header from './header/Header';
import Keyboard from './keyboard/Keyboard';
import Audio from './audio/Audio';
import Camera from './camera/Camera';
import Drivers from './drivers/Drivers';
import genSpec from './keyboard/logic/lenovo-spec';
import { STATES, type Completion } from './appConstants';
import Translations from './translations/enUS';

export default function App (): JSX.Element {
    const [completion, setCompletion] = useState(initCompletion);

    console.log(setCompletion);

    return (
        <>
            <h1>
                Hello World
            </h1>
            <Header completion={completion} />
            <Keyboard KBSpec={genSpec()} />
            <Audio />
            <Camera />
            <Drivers />
        </>
    );
}

const initCompletion: Completion = {
    audio: { state: STATES.UNKNOWN, displayName: Translations.Sections.AUDIO.Name },
    camera: { state: STATES.UNKNOWN, displayName: Translations.Sections.CAMERA.Name },
    drivers: { state: STATES.UNKNOWN, displayName: Translations.Sections.DRIVERS.Name },
    keyboard: { state: STATES.UNKNOWN, displayName: Translations.Sections.KEYBOARD.Name },
};
