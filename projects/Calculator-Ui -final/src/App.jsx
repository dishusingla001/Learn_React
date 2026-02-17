import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";
function App() {

  let [calVal,setCalVal] = useState("");

  const handleCalculatorButton = (event) => {
    if(event.target.textContent==="AC"){
      setCalVal("");
    }else if(event.target.textContent==="="){
      const result = eval(calVal);
      setCalVal(result);
    }else{
      setCalVal(calVal+event.target.textContent);
    }
  }


  return (
    <div className={styles.calculator}>
      <Display inputvalue={calVal} />
      <ButtonContainer nextValue={handleCalculatorButton} getButtonValue={handleCalculatorButton}/>
    </div>
  );
}

export default App;
