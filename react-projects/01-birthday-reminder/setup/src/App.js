import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
    const [people, setPeople] = useState(data);

    const clearAll = () => {
        setPeople([]);
    };
    return (
        <>
            <main>
                <section className="section container">
                    <h3>{people.length} birthdays today</h3>
                    <List person={people} />
                    <button type="button" className="btn" onClick={clearAll}>
                        clear all
                    </button>
                </section>
            </main>
        </>
    );
}

export default App;
