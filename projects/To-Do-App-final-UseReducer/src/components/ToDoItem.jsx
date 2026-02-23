import { useContext } from "react";
import styles from "./ToDoItem.module.css";
import { MdDelete } from "react-icons/md";
import { ToDoItemsContext } from "../store/todo-item-store";

function ToDoItem({toDoName,toDoDate}) {

  const { deleteItem } = useContext(ToDoItemsContext);

  return (
    <div className="container">
      <div className={`${styles["my-row"]} row`}>
        <div className="col-6">{toDoName}</div>
        <div className="col-4">{toDoDate}</div>
        <div className="col-2">
          <button onClick={()=>{deleteItem(toDoName)}} type="button"  className={`${styles['my-button']} btn btn-danger`}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
