import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoitems from "./components/ToDoItems";
import "./App.css";
import Container from "./components/Container";
import EnjoyMessage from "./components/EnjoyMessage";
import { useState } from "react";

function App() {
  const [toDoItem, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    let newItems = [...toDoItem, { toDoName: itemName, toDoDate: itemDate }];
    setTodoItems(newItems);
  };

  const handleDeleteButton = (item) => {
    const updatedItem = toDoItem.filter((elements)=>elements!==item);
    setTodoItems(updatedItem);
  }

  return (
    <Container>
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      <EnjoyMessage toDoItem={toDoItem}/>
      <ToDoitems onClickDelete={handleDeleteButton} todoItem={toDoItem} />
    </Container>
  );
}

export default App;
