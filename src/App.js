import React from "react";
import FirstButton from "./components/buttons/FirstButton/FirstButton";
import SecondButton from "./components/buttons/SecondButton/SecondButton";
import Field from "./components/Field";
import FailScreen from "./components/screens/FailScreen";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      {/* <Title />
      <FirstButton />
      <Field />
      <SecondButton /> */}
      <FailScreen />
    </div>
  );
}

export default App;
