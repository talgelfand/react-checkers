import React from "react";
import FieldCell from "../FieldCell";

import "./Field.scss";

const squares = [];

for (let i = 0; i < 64; i++) {
  squares.push(<FieldCell />);
}

function Field() {
  return <div className="field">{squares}</div>;
}

export default Field;
