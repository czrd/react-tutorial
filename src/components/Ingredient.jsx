import PropTypes from "prop-types";
import React from "react";

export default function Ingredient({ amount, measurement, name }) {
  return (
    <li>
      {amount}
      {measurement}
      {name}
    </li>
  );
}

Ingredient.propTypes = {
  amount: PropTypes.number.isRequired,
  measurement: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
