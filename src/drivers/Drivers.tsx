import { useState, type JSX } from 'react';
import Translations from '../translations/enUS';
import { States, type State } from '../appConstants';

export default function Drivers ({ setCompletion }: DriversParams): JSX.Element {
    const [clicked, setClicked] = useState({
        bridge: false,
        support: false,
    });

    const handleClick = (button: 'bridge' | 'support'): void => {
        if (button === 'bridge') setClicked({ bridge: true, support: clicked.support });
        else setClicked({ bridge: clicked.bridge, support: true });
    };

    if (clicked.bridge && clicked.support) setCompletion(States.PASSED);
    else if (clicked.bridge || clicked.support) setCompletion(States.PARTIAL);

    return (
        <div className='Drivers'>
            <a
                className={`Bridge button ${clicked.bridge ? 'clicked' : 'cta'}`}
                href={Links.SERVICE_BRIDGE}
                onClick={() => handleClick('bridge')}
            >
                {Translations.DRIVERS.Buttons.BRIDGE}
            </a>
            <a
                className={`PCSupport button ${clicked.bridge ? (clicked.support ? 'clicked' : 'cta') : 'disabled'}`}
                href={Links.PCSUPPORT}
                onClick={() => handleClick('support')}
            >
                {Translations.DRIVERS.Buttons.PCSUPPORT}
            </a>
        </div>
    );
}

const Links = {
    SERVICE_BRIDGE: 'https://download.lenovo.com/lsbv5/LSBSetup.exe',
    PCSUPPORT: 'https://pcsupport.lenovo.com/',
} as const;

interface DriversParams {
    setCompletion: (state: State) => void;
}
