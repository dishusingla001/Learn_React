import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoitems from "./components/ToDoItems";
import "./App.css";
import Container from "./components/Container";
import EnjoyMessage from "./components/EnjoyMessage";
import { useState } from "react";
import { ToDoItemsContext } from "./store/todo-item-store";

function App() {
  const [toDoItem, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDate) => {
    setTodoItems((currentValue) => [
      ...currentValue,
      { toDoName: itemName, toDoDate: itemDate },
    ]);
  };

  const deleteItem = (toDoItemName) => {
    const updatedItem = toDoItem.filter((elements) => elements.toDoName !== toDoItemName);
    setTodoItems(updatedItem);
  };

  return (
    <ToDoItemsContext.Provider
      value={{
        toDoItem,
        addNewItem,
        deleteItem,
      }}
    >
      <Container>
        <AppName />
        <AddToDo />
        <EnjoyMessage />
        <ToDoitems />
      </Container>
    </ToDoItemsContext.Provider>
  );
}

export default App;
