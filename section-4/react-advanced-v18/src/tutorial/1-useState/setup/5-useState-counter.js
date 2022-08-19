import React, { useState } from "react";

const UseStateCounter = () => {
    const [value, setValue] = useState(0);

    const reset = () => {
        return setValue(0);
    };

    const complexIncrease = () => {
        setTimeout(() => {
            setValue((prevValue) => {
                return prevValue + 1;
            });
        }, 2000);
    };

    return (
        <React.Fragment>
            <h2>Regular Counter</h2>
            <h2>{value}</h2>
            <button className="btn" onClick={() => setValue(value - 1)}>
                decrease
            </button>
            <button className="btn" onClick={reset}>
                reset
            </button>
            <button className="btn" onClick={() => setValue(value + 1)}>
                increase
            </button>
            <section style={{ marginTop: "2rem" }}>
                <h2>Complex Counter</h2>
                <h2>{value}</h2>
                <button className="btn" onClick={complexIncrease}>
                    increase
                </button>
            </section>
        </React.Fragment>
    );
};

export default UseStateCounter;
