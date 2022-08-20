import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);

    const changeSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", changeSize);
        //add a cleanup function
        return () => {
            window.removeEventListener("resize", changeSize);
        };
    });

    return (
        <>
            <h2>window</h2>
            <h3>{size} PX</h3>
        </>
    );
};

export default UseEffectCleanup;
