import React from "react";
import FieldCell from "../FieldCell";

import "./Field.scss";

const squares = [];

for (let i = 0; i < 8; i++) {
  squares.push([]);
  for (let j = 0; j < 8; j++) {
    squares[i].push(<FieldCell key={i + "" + j} />);
  }
}

function Field() {
  return <div className="field">{squares}</div>;
}

export default Field;
