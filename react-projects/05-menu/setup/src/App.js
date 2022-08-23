import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
    const [menuItems, setMenuItems] = useState(items);

    const showItems = (e) => {
        const filterText = e.target.textContent;

        if (filterText === "all") {
            setMenuItems(items);
        } else {
            const filteredItems = items.filter((item) => {
                return item.category === filterText;
            });
            setMenuItems(filteredItems);
        }
    };

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories items={items} showItems={showItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
