import React from "react";

const ErrorExample = () => {
    let title = "Some Title";
    const handleClick = () => {
        title = "Changed title";
        console.log(title);
    };

    return (
        <div>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={handleClick}>
                change title
            </button>
        </div>
    );
};

export default ErrorExample;
