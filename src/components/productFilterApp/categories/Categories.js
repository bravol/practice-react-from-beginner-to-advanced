import React from "react";
import "./Categories.css";

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

//creating the props
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="--flex-center">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="btn --btn --btn-secondary"
            key={index}
            onClick={() => filterItems(category)}
          >
            {/* {category.toUpperCase()} */}
            {capitalize(category)}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
