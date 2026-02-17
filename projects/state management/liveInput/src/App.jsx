import './App.css'
import InputHeader from './components/InputHeader'
import Container from "./components/Container";
import InputValue from "./components/InputValue";
import InputText from './components/InputText';
import ClearButton from "./components/ClearButton"
import {useState} from 'react';

function App() {

  const [currentValue,setNextValue] = useState("");

  const handleInputValue = (event) => {
    setNextValue(event.target.value);
  }

  const handleClearButton = (event) => {
    setNextValue("");
  }

  return(
    <Container>
      <InputHeader />
      <InputText value={currentValue} onChange={handleInputValue}/>
      <InputValue value={currentValue}/>
      <ClearButton clearValue={handleClearButton}/>
    </Container>
  )
}

export default App
