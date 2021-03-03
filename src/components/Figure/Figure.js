import React, { Component } from "react";

import "./Figure.scss";

class Figure extends Component {
  state = {
    color: "",
    crowned: false,
  };

  render() {
    return <div className="figure"></div>;
  }
}

export default Figure;
