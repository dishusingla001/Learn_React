import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import {useState} from "react";

function App() {
  let [foodItems , setFoodItems] = useState([]);
  const onkeyDown = (event) => {
    if(event.key == "Enter"){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems,newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Delux Thali</h1>
        <FoodInput handleKeyDown={onkeyDown}></FoodInput>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
