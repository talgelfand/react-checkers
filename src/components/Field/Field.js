import React from "react";
import FieldCell from "../FieldCell";

import "./Field.scss";

const squares = [];

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    squares[i][j] = <FieldCell />;
  }
}

function Field() {
  squares.map((square) => {
    return square.map((cell) => {
      return <div className="field">{cell}</div>;
    });
  });
}

export default Field;
