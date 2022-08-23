import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
    const { title, info } = props.question;

    const [isVisible, setIsVisible] = useState(false);

    const showQuestion = () => {
        setIsVisible(!isVisible);
    };
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={showQuestion}>
                    {isVisible ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {isVisible && <p>{info}</p>}
        </article>
    );
};

export default Question;
