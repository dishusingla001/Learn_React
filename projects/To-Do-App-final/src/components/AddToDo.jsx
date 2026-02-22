import { useContext, useRef } from "react";
import styles from "./AddToDo.module.css";
import { IoIosAddCircle } from "react-icons/io";
import { ToDoItemsContext } from "../store/todo-item-store";

function AddToDo() {
  const {addNewItem} = useContext(ToDoItemsContext);

  const toDoElement = useRef();
  const toDoDateElement = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    const toDoName = toDoElement.current.value;
    const toDoDate = toDoDateElement.current.value;
    toDoElement.current.value = "";
    toDoDateElement.current.value = "";
    addNewItem(toDoName, toDoDate);
  };
  
  return (
    <div className="container text-center">
      <form onSubmit={handleAddButton} className={`${styles["my-row"]} row`}>
        <div className="col-6">
          <input
            ref={toDoElement}
            type="text"
            placeholder="Enter Task"
          />
        </div>
        <div className="col-4">
          <input ref={toDoDateElement} type="date" />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={`${styles["my-button"]} btn btn-success`} 
          >
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
