import React from "react";
import flags from "./flags.png";
import RetryButton from "../../buttons/RetryButton";

import "./WinScreen.scss";

function WinScreen() {
  return (
    <div className="win-screen">
      <h1 className="win-screen__title">Congratulations! You won!</h1>
      <img className="win-screen__img" src={flags} alt="flags" />
      <RetryButton />
    </div>
  );
}

export default WinScreen;
