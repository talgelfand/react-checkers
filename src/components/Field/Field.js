import React, { useReducer, useState } from "react";
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

const getPositions = (x, y) => {
  return [x, y];
};

const Field = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DROP_DEPTH":
        return { ...state, dropDepth: action.dropDepth };
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "GET_POSITIONS":
        return { ...state, positions: action.positions };
      case "DRAG_FIGURE":
        return { ...state, figure: action.figure };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, {
    figure: null,
    dropDepth: 0,
    inDropZone: false,
    positions: [],
  });

  const getDragFigure = () => {
    // return data.figure;
    return { ...data, figure: data.figure };
  };

  const squares = [];

  for (let i = 0; i < 8; i++) {
    squares.push([]);
    for (let j = 0; j < 8; j++) {
      squares[i].push(
        <FieldCell
          key={i + "" + j}
          data={data}
          dispatch={dispatch}
          figure={getFigure(i, j)}
          positions={getPositions(i, j)}
          getDragFigure={getDragFigure}
        />
      );
    }
  }
  return <div className="field">{squares}</div>;
};

export default Field;
