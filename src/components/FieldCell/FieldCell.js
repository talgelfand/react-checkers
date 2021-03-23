import React, { useState } from "react";
import WhiteFigure from "./WhiteFigure.png";
import BlackFigure from "./BlackFigure.png";

import "./FieldCell.scss";

const FieldCell = () => {
  const [color, setColor] = useState("white");
  return (
    <div className="cell">
      {color ? (
        "black" ? (
          <img draggable src={BlackFigure} alt="black" />
        ) : (
          <img draggable src={WhiteFigure} alt="white" />
        )
      ) : null}
    </div>
  );
};

export default FieldCell;
