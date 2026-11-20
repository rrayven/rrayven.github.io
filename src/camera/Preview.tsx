import { useEffect, useRef, type JSX } from 'react';
import Translations from '../translations/enUS';

export default function Preview ({ stream, startCamera }: PreviewParams): JSX.Element {
    const video = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!video.current || !stream) return;
        video.current.srcObject = stream;
    }, [stream]);

    const startPrompt = (
        <button className='Prompt' onClick={startCamera}>
            {Translations.CAMERA.Buttons.PROMPT}
        </button>
    );

    const camera = (
        <video ref={video} autoPlay playsInline muted />
    );

    return (
        <div className='Preview'>
            {stream ? camera : startPrompt}
        </div>
    );
}

interface PreviewParams {
    stream: MediaStream | null;
    startCamera: () => void;
}
