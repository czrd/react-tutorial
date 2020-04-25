import PropTypes from "prop-types";
import React from "react";

import Recipe from "./Recipe";

export default function Menu({ title, recipes }) {
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe
            key={i}
            name={recipe.name}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
          />
        ))}
      </div>
    </article>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape(Recipe.propTypes)).isRequired,
};
