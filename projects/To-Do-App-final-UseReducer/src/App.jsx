import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoitems from "./components/ToDoItems";
import "./App.css";
import Container from "./components/Container";
import EnjoyMessage from "./components/EnjoyMessage";
import { useReducer } from "react";
import { ToDoItemsContext } from "./store/todo-item-store";

const toDoItemsReducer = (currToDoItems, action) => {
  let newToDoItems = currToDoItems;

  if (action.type === "NEW_ITEM") {
    newToDoItems = [
      ...currToDoItems,
      { toDoName: action.payload.itemName, toDoDate: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newToDoItems = currToDoItems.filter(
      (elements) => elements.toDoName !== action.payload.toDoItemName,
    );
  }

  return newToDoItems;
};

function App() {
  const [toDoItem, dispatchToDoItems] = useReducer(toDoItemsReducer, []);

  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };

    dispatchToDoItems(newItemAction);
  };

  const deleteItem = (toDoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        toDoItemName,
      },
    };

    dispatchToDoItems(deleteItemAction);
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
