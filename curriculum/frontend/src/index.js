import React from "react";
import { render } from "react-dom";
import { getElementError } from "react-testing-library";

function Hi() {
  return <p>Hi.</p>;
}

render(<Hi />, document.getElementById("app"));
