import './App.css'
import CounterHeader from './components/Counterheader'
import Container from "./components/Container";
import AddButton from './components/AddButton';
import Counting from './components/Counting';
import {useState} from 'react';
import ResetButton from './components/ResetButton';

function App() {
  const [currentCount,setNextCount] = useState(0);

  const handleButtonCount = (event) => {
    if(event.target.value==="add"){
      setNextCount(currentCount+1);
    }else if(event.target.value==="reset"){
      setNextCount(0);
    }
  }

  return(
    <Container>
      <CounterHeader />
      <Counting count={currentCount}/>
      <AddButton buttonCount={handleButtonCount}/>
      <ResetButton resetCount={handleButtonCount}/>
    </Container>
  )
}

export default App
