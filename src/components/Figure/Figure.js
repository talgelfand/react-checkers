import React from "react";

import "./Figure.scss";

const Figure = ({ color }) => {
  return <div className={`figure ${color}`}></div>;
};

export default Figure;
