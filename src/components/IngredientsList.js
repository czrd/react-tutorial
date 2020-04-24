import React from "react";
import PropTypes from "prop-types";

import Ingredient from "./Ingredient";

export default function IngredientList({ list }) {
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  );
}

IngredientList.propTypes = {
  list: PropTypes.array,
};
