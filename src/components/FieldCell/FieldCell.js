import React from "react";
import WhiteFigure from "../Figure/WhiteFigure.png";
import BlackFigure from "../Figure/BlackFigure.png";

import "./FieldCell.scss";
import FiguresArray from "../FiguresArray";

const FieldCell = ({ data, dispatch, figure, positions, getDragFigure }) => {
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth + 1 });
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth - 1 });
    if (data.dropDepth > 0) return;
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "SET_DROP_DEPTH", dropDepth: 0 });
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    dispatch({ type: "GET_POSITIONS", positions: [positions.x, positions.y] });

    console.log(`Dropped to ${positions}`);

    const draggedFigure = getDragFigure();

    FiguresArray.forEach((element) => {
      if (
        element.positionX === draggedFigure.positionX &&
        element.positionY === draggedFigure.positionY
      ) {
        element.positionX = positions.x;
        element.positionY = positions.y;
      }
    });
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "DRAG_FIGURE", figure: figure });
  };

  return (
    <div
      className="cell"
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
    >
      {figure ? (
        figure.color === "black" ? (
          <img
            onDragStart={(e) => handleDragStart(e)}
            draggable
            figure={figure}
            src={BlackFigure}
            alt="black"
          />
        ) : (
          <img draggable figure={figure} src={WhiteFigure} alt="white" />
        )
      ) : null}
    </div>
  );
};

export default FieldCell;
