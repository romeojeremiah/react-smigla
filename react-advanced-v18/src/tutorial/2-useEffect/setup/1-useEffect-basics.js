import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (value >= 1) document.title = `New Messsage: (${value})`;
    });

    return (
        <div>
            <h2>{value}</h2>
            <button
                type="button"
                className="btn"
                onClick={() => setValue(value + 1)}
            >
                click me
            </button>
        </div>
    );
};

export default UseEffectBasics;
