import React from "react";

import Menu from "./components/Menu";
import data from "./data";

export default function App() {
  return <Menu title="Delicious Recipes" recipes={data} />;
}
