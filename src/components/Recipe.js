import React from "react";
import PropTypes from "prop-types";

export default function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <ul className="ingredients">
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.name}</li>
        ))}
      </ul>
      <section className="instructions">
        <h2>Cooking Instructions</h2>
        {steps.map((step, i) => (
          <p key={i}>{step}</p>
        ))}
      </section>
    </section>
  );
}

Recipe.propTypes = {
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.number,
      measurement: PropTypes.string,
    })
  ),
  steps: PropTypes.arrayOf(PropTypes.string),
};
