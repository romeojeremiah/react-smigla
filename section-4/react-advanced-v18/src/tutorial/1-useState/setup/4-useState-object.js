import React, { useState } from "react";

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: "Romeo",
        age: 24,
        message: "hello",
    });
    const { name, age, message } = person;

    const changeMessage = () => {
        setPerson({ name: "John", age: 22, message: "new hello" });
    };

    return (
        <>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className="btn" onClick={changeMessage}>
                change message
            </button>
        </>
    );
};

export default UseStateObject;
