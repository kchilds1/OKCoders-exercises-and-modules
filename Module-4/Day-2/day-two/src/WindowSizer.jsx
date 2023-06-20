import { useEffect, useState } from "react";

const WindowSizer = () => {
    const [width, setWidth] = useState(window.innerWidth);
    
    const handleResize = () => {
        setWidth(window.innerWidth)
    };
    
    
    useEffect (() => {
        window.addEventListener("resize", handleResize);
        }, []);
        
   

    return <>Window width: {width}</>;
};


export default WindowSizer;
