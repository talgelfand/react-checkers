import React from "react";
import WhiteFigure from "../Figure/WhiteFigure.png";
import BlackFigure from "../Figure/BlackFigure.png";

import "./FieldCell.scss";

const FieldCell = ({ data, dispatch, figure, positions }) => {
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

    e.dataTransfer.dropEffect = "copy";
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  const handleDrop = (e, x, y) => {
    e.preventDefault();
    e.stopPropagation();

    let files = [...e.dataTransfer.files];

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f) => f.name);
      files = files.filter((f) => !existingFiles.includes(f.name));

      dispatch({ type: "SET_DROP_DEPTH", dropDepth: 0 });
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
      dispatch({ type: "GET_POSITIONS", positions: [x, y] });
    }

    console.log(`Dropped to ${positions}`);
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
          <img draggable src={BlackFigure} alt="black" />
        ) : (
          <img draggable src={WhiteFigure} alt="white" />
        )
      ) : null}
      {positions
        ? (e) => handleDrop(e, figure.positionX, figure.positionY)
        : null}
    </div>
  );
};

export default FieldCell;
