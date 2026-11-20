// the point of this isn't that you'd ship different translation TS files,
// it's that it's much easier to adapt to say JSON translation files in the
// future, should the need arise.

const Translations = {
    AUDIO: {
        Name: 'Audio',
    },
    CAMERA: {
        Name: 'Camera',
        Buttons: {
            STOP: 'Stop Camera',
            GOOD: 'Looks good',
            BAD: 'Something\'s wrong',

            PROMPT: 'Allow access to your camera',
        },
    },
    DRIVERS: {
        Name: 'Drivers',
        Buttons: {
            BRIDGE: 'Download Lenovo Service Bridge',
            PCSUPPORT: 'Open Lenovo Support',
        },
    },
    KEYBOARD: {
        Name: 'Keyboard',
    },
} as const;

export default Translations;
