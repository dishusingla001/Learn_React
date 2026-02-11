import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoitems from "./components/ToDoItems";
import "./App.css";

function App() {
  const toDoItems = [
    {
      toDoName: "Go to Walk",
      toDoDate: "04/02/2026",
    },
    {
      toDoName: "Go to Gym",
      toDoDate: "04/02/2026",
    },
    {
      toDoName: "Breakfast",
      toDoDate: "10/02/2026",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <ToDoitems todoItems={toDoItems} />
    </center>
  );
}

export default App;
