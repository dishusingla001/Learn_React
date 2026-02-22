import { useContext } from "react";
import styles from "./EnjoyMessage.module.css";
import { ToDoItemsContext } from "../store/todo-item-store";

const EnjoyMessage = () => {

  const {toDoItem} = useContext(ToDoItemsContext);

  if (toDoItem.length === 0) {
    return (
      <>
        <h2 className={styles.header}>Enjoy Your Day</h2>
        <h4>No Pending Task</h4>
      </>
    );
  }
};

export default EnjoyMessage;
