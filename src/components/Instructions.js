import React from "react";
import PropTypes from "prop-types";

export default function Instructions({ title, steps }) {
  return (
    <section className="instructions">
      <h2>{title}</h2>
      {steps.map((s, i) => (
        <p key={i}>{s}</p>
      ))}
    </section>
  );
}

Instructions.propTypes = {
  title: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.string),
};
