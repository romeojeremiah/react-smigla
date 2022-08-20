import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h2>github users</h2>
            <ul className="users">
                {users.map((user) => {
                    const { id, login, html_url, avatar_url } = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login}></img>
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default UseEffectFetchData;
