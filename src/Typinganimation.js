import React, {useEffect, useRef} from "react";
import Typed from 'typed.js';



const TypingAnimation = () => {
    const typingRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'I AM WEB DEVELOPER',
                'I AM APP DEVELOPER',
                'KNOW MORE ABOUT ME HERE',
            ],
            typeSpeed:50,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
            showCursor: true,
        };

        const typingInstance = new Typed(typingRef.current, options);

        return () => {
            typingInstance.destroy();
        };
    }, []);

    return (
        <div>

             <div className="typing"><span ref={typingRef}/></div>

        </div>
        

    );
};

export default TypingAnimation;