import React from "react";

const List = (props) => {
    const people = props.person;

    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <div className="person" key={id}>
                        <img src={image} alt={name}></img>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default List;
