import React from "react";
import fail from "./fail.png";
import RetryButton from "../../buttons/RetryButton";

import "./FailScreen.scss";

const FailScreen = () => {
  return (
    <div className="fail-screen">
      <h1 className="fail-screen__title">You lost :(</h1>
      <img className="fail-screen__img" src={fail} alt="fail" />
      <RetryButton />
    </div>
  );
};

export default FailScreen;
