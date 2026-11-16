import { type JSX } from 'react';
import Header from './header/Header';
import Keyboard from './keyboard/Keyboard';
import Audio from './audio/Audio';
import Camera from './camera/Camera';
import Drivers from './drivers/Drivers';
import genSpec from './keyboard/logic/lenovo-spec';

export default function App (): JSX.Element {
    return (
        <>
            <h1>
                Hello World
            </h1>
            <Header />
            <Keyboard KBSpec={genSpec()} />
            <Audio />
            <Camera />
            <Drivers />
        </>
    );
}
