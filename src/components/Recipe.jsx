import PropTypes from "prop-types";
import React from "react";

import Ingredient from "./Ingredient";
import IngredientList from "./IngredientsList";
import Instructions from "./Instructions";

export default function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <IngredientList list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
}

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape(Ingredient.propTypes))
    .isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};
