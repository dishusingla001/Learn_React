import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
  // let foodItems = [];
  let foodItems = [
    "Dal Makhni",
    "Vegetable",
    "Salad",
    "Roti",
    "Paneer",
    "Dahi",
  ];

  return (
    <>
      <Container>
        <h1 className="food-heading">Delux Thali</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput></FoodInput>
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
