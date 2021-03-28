import React from "react";
import FirstButton from "./components/buttons/FirstButton/FirstButton";
import SecondButton from "./components/buttons/SecondButton/SecondButton";
import Field from "./components/Field";
import Title from "./components/Title";

const App = () => {
  return (
    <div className="App">
      <Title />
      <SecondButton />
      <Field />
      <FirstButton />
    </div>
  );
};

export default App;
