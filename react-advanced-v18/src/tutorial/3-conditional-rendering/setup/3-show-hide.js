import React, { useState, useEffect } from "react";

const ShowHide = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button className="btn" onClick={() => setShow(!show)}>
                show/hide
            </button>
            {show && <Item />}
        </>
    );
};

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setSize(window.innerWidth));
    }, []);

    return (
        <>
            <h2>window</h2>
            <h2>size: {size} px</h2>
        </>
    );
};

export default ShowHide;
