import React from "react";
import PropTypes from "prop-types";

import Instructions from "./Instructions";
import IngredientList from "./IngredientsList";

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
  name: PropTypes.string,
  ingredients: PropTypes.array,
  steps: PropTypes.array,
};
