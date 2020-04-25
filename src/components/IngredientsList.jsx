import PropTypes from "prop-types";
import React from "react";

import Ingredient from "./Ingredient";

export default function IngredientList({ list }) {
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => (
        <Ingredient
          key={i}
          amount={ingredient.amount}
          measurement={ingredient.measurement}
          title={ingredient.title}
        />
      ))}
    </ul>
  );
}

IngredientList.propTypes = {
  list: PropTypes.arrayOf(Ingredient.propTypes).isRequired,
};
