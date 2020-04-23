import React from "react";
import PropTypes from "prop-types";

import Recipe from "./Recipe";

export default function Menu({ title, recipes }) {
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}

Menu.propTypes = {
  title: PropTypes.string,
  recipes: PropTypes.array,
};