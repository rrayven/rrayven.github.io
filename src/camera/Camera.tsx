// temporary, needs better error handling and yk functionality as a whole
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, type JSX } from 'react';

export default function Camera (): JSX.Element {
    const stream = useRef<MediaStream | null>(null);

    function startCamera (): void {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(cameraStream => stream.current = cameraStream)
            .catch(console.error);
    }

    function stopCamera (): void {
        stream.current?.getTracks().forEach(track => track.stop());
        stream.current = null;
    }

    return (
        <></>
    );
}
