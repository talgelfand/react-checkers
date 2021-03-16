import React from "react";
import { Button } from "reactstrap";

import "./RetryButton.scss";

function RetryButton() {
  return (
    <Button className="retry-button" size="lg" color="info">
      Retry
    </Button>
  );
}

export default RetryButton;
