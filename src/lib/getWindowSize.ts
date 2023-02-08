import { useEffect, useState } from "react"


export const getWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect( () => {
        if(typeof window !== undefined){
            const getSize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                })
            };
            window.addEventListener(
                'resize',
                () => {
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                    })
                }
            );
        }
    }, []);
    return windowSize;
}