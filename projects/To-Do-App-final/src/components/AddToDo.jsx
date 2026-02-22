import { useState } from "react";
import styles from "./AddToDo.module.css";
import { IoIosAddCircle } from "react-icons/io";

function AddToDo({ onNewItem }) {
  const [toDoName, setToDoName] = useState("");
  const [toDoDate, setToDoDate] = useState("");

  const handleToDoInput = (event) => {
    setToDoName(event.target.value);
  };

  const handleToDoDate = (event) => {
    setToDoDate(event.target.value);
  };

  const handleAddButton = (event) => {
    event.preventDefault();
    onNewItem(toDoName, toDoDate);

    setToDoDate("");
    setToDoName("");
  };
  return (
    <div className="container text-center">
      <form onSubmit={handleAddButton} className={`${styles["my-row"]} row`}>
        <div className="col-6">
          <input
            value={toDoName}
            onChange={handleToDoInput}
            type="text"
            placeholder="Enter Task"
          />
        </div>
        <div className="col-4">
          <input value={toDoDate} onChange={handleToDoDate} type="date" />
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
