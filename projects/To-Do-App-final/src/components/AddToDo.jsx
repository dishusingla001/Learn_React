import { useState } from "react";
import styles from "./AddToDo.module.css";

function AddToDo({onNewItem}) {

  const [toDoName,setToDoName] = useState("");
  const [toDoDate,setToDoDate] = useState("");

  const handleToDoInput = (event) => {
    setToDoName(event.target.value);
  }

  const handleToDoDate = (event) => {
    setToDoDate(event.target.value);
  }

  const handleAddButton = () => {
    onNewItem(toDoName,toDoDate);

    setToDoDate("");
    setToDoName("");

  }
  return (
    <div className="container text-center">
      <div className={`${styles["my-row"]} row`}>
        <div className="col-6">
          <input value={toDoName} onChange={handleToDoInput} type="text" placeholder="Enter Task" />
        </div>
        <div className="col-4">
          <input value={toDoDate} onChange={handleToDoDate} type="date"/>
        </div>
        <div className="col-2">
          <button type="button" className={`${styles["my-button"]} btn btn-success`} 
          onClick={handleAddButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
