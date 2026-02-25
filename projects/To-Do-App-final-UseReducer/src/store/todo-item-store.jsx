import { createContext, useReducer } from "react";

export const ToDoItemsContext = createContext([]);

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

const ToDoItemsContextProvider = ({ children }) => {
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
      {children}
    </ToDoItemsContext.Provider>
  );
};

export default ToDoItemsContextProvider;
