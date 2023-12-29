import React, {useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Account = () => {

    const textRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;

        gsap.to(textElement, {
            duration: 2, // Длительность анимации в секундах
            text: {
                value: 'Привіт, це текст, який печататиметься.',
                delimiter: ' ', // Пробел между словами
            },
            ease: 'power1.inOut', // Эффект ease
        });
    }, []);

    return (
        <div>
            <h1 ref={textRef}></h1>
        </div>
    );

};

export default Account;