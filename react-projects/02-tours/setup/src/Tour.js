import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
    const [readMore, setReadMore] = useState(true);

    return (
        <article className="single-tour">
            <img src={image} alt={name}></img>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">{price}</h4>
                </div>
                <p>
                    {readMore ? `${info.substring(0, 200)} ...` : info}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Read More" : "Show Less"}
                    </button>
                </p>
                <button
                    className="btn delete-btn"
                    onClick={() => {
                        removeTour(id);
                    }}
                >
                    not interested
                </button>
            </footer>
        </article>
    );
};

export default Tour;
