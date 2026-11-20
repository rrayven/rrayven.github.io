import { useEffect, useState, type JSX } from 'react';
import Preview from './Preview';
import Translations from '../translations/enUS';
import type { CommonParams } from '../App';
import { States } from '../appConstants';

export default function Camera ({ setCompletion }: CommonParams): JSX.Element {
    const [stream, setStream] = useState<MediaStream | null>(null);

    if (stream) setCompletion(States.PARTIAL);

    function startCamera (): void {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(cameraStream => setStream(cameraStream))
            .catch(console.error);
    }

    function stopCamera (): void {
        stream?.getTracks().forEach(track => track.stop());
        setStream(null);
    }

    useEffect(() => {
        const track = stream?.getVideoTracks()[0];
        if (!track) return;

        const onEnd = (): void => setStream(null);

        track.addEventListener('ended', onEnd);
        return (): void => track.removeEventListener('ended', onEnd);
    }, [stream]);

    return (
        <div className='Camera'>
            <Preview stream={stream} startCamera={startCamera} />
            <button className='Good' onClick={() => setCompletion(States.PASSED)}>
                {Translations.CAMERA.Buttons.GOOD}
            </button>
            <button className='Bad' onClick={() => setCompletion(States.FAILED)}>
                {Translations.CAMERA.Buttons.BAD}
            </button>
            <button className='Stop' onClick={stopCamera} disabled={!stream}>
                {Translations.CAMERA.Buttons.STOP}
            </button>
        </div>
    );
}
