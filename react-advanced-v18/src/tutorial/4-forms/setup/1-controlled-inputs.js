import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (firstName && email) {
            const person = {
                id: new Date().getTime().toString(),
                firstName,
                email,
            };
            setPeople([...people, person]);
            setFirstName("");
            setEmail("");
        } else {
            console.log("Values were blank");
        }
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    return (
        <article>
            <form className="form" onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="firstName">Name:</label>
                    <input
                        type="input"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={handleFirstName}
                    ></input>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="input"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleEmail}
                    ></input>
                </div>
                <button type="submit">add person</button>
            </form>
            {people.map(({ id, firstName, email }) => {
                return (
                    <div className="item" key={id}>
                        <h4>{firstName}</h4>
                        <p>{email}</p>
                    </div>
                );
            })}
        </article>
    );
};

export default ControlledInputs;
