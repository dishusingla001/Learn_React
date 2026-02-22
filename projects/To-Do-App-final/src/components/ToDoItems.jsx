import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";
import { ToDoItemsContext } from "../store/todo-item-store";

const ToDoitems = () => {
  const { toDoItem } = useContext(ToDoItemsContext);

  return (
    <>
      <div className={styles.itemContainer}>
        {toDoItem.map((item) => {
          return (
            <ToDoItem
              key={item.toDoName}
              toDoName={item.toDoName}
              toDoDate={item.toDoDate}
            />
          );
        })}
      </div>
    </>
  );
};

export default ToDoitems;
