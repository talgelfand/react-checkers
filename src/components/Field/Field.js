import React, { useReducer } from "react";
import FieldCell from "../FieldCell";
import FiguresArray from "../FiguresArray";

import "./Field.scss";

const getFigure = (x, y) => {
  for (let i = 0; i < FiguresArray.length; i++) {
    if (x === FiguresArray[i].positionX && y === FiguresArray[i].positionY) {
      return FiguresArray[i];
    }
  }
};

const Field = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DROP_DEPTH":
        return { ...state, dropDepth: action.dropDepth };
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, {
    dropDepth: 0,
    inDropZone: false,
    fileList: [],
  });

  const squares = [];

  for (let i = 0; i < 8; i++) {
    squares.push([]);
    for (let j = 0; j < 8; j++) {
      squares[i].push(
        <FieldCell
          key={i + "" + j}
          data={data}
          dispatch={dispatch}
          // positionX={FiguresArray[i].positionX - 1}
          // positionY={FiguresArray[j].positionY}
          figure={getFigure(i, j)}
        />
      );
    }
  }
  return <div className="field">{squares}</div>;
};

export default Field;
