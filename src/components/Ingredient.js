import React from "react";
import PropTypes from "prop-types";

export default function Ingredient({ amount, measurement, name }) {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
}

Ingredient.propTypes = {
  amount: PropTypes.number,
  measurement: PropTypes.string,
  name: PropTypes.string,
};
