import styles from "./AddToDo.module.css";

function AddToDo() {
  return (
    <div className="container text-center">
      <div className={`${styles["my-row"]} row`}>
        <div className="col-6">
          <input type="text" placeholder="Enter Task" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className={`${styles["my-button"]} btn btn-success`}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
