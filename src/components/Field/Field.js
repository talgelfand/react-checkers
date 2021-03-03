import React from "react";
// import BlackFigure from "../figures/BlackFigure";
// import WhiteFigure from "../figures/WhiteFigure";
import FieldCell from "../FieldCell";

import "./Field.scss";

const squares = [];

for (let i = 0; i < 64; i++) {
  squares.push(<FieldCell />);
}

function Field() {
  return <div className="field">{squares}</div>;
  // <div className="field">
  //   <div className="square">
  //     <BlackFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <BlackFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <BlackFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <BlackFigure />
  //   </div>
  //   <div className="square" />

  //   <div className="square" />
  //   <div className="square">
  //     <BlackFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <BlackFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <BlackFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <BlackFigure />
  //   </div>

  //   <div className="square">
  //     <BlackFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <BlackFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <BlackFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <BlackFigure />
  //   </div>
  //   <div className="square" />

  //   <div className="square" />
  //   <div className="square" />
  //   <div className="square" />
  //   <div className="square" />
  //   <div className="square" />
  //   <div className="square" />
  //   <div className="square" />
  //   <div className="square" />

  //   <div className="square" />
  //   <div className="square" />
  //   <div className="square" />
  //   <div className="square" />
  //   <div className="square" />
  //   <div className="square" />
  //   <div className="square" />
  //   <div className="square" />

  //   <div className="square">
  //     <WhiteFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <WhiteFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <WhiteFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <WhiteFigure />
  //   </div>
  //   <div className="square" />

  //   <div className="square" />
  //   <div className="square">
  //     <WhiteFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <WhiteFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <WhiteFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <WhiteFigure />
  //   </div>

  //   <div className="square">
  //     <WhiteFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <WhiteFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <WhiteFigure />
  //   </div>
  //   <div className="square" />
  //   <div className="square">
  //     <WhiteFigure />
  //   </div>
  //   <div className="square" />
  // </div>
}

export default Field;
