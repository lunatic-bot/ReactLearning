import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/display";

function App() {
  const [calVal, steCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      steCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      steCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      steCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
