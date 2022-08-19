import React, { useState } from "react";

const UseStateBasics = () => {
    const [value, setValue] = useState("hello world");
    const handler = () => {
        if (value === "hello world") {
            setValue("New Title");
        } else {
            setValue("hello world");
        }
    };

    return (
        <React.Fragment>
            <h2>{value}</h2>
            <button className="btn" onClick={handler}>
                change title
            </button>
        </React.Fragment>
    );
};

export default UseStateBasics;
