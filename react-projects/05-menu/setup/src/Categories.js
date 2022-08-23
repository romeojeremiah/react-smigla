import React from "react";

const Categories = (props) => {
    const uniqueCategories = new Set(
        props.items.map((item) => {
            return item.category;
        })
    );
    const allCategories = ["all", ...uniqueCategories];

    return (
        <div className="btn-container">
            {allCategories.map((category) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={category}
                        onClick={props.showItems}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;
