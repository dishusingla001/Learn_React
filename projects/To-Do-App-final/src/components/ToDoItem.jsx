import styles from "./ToDoItem.module.css";

function ToDoItem({toDoName,toDoDate,onClickDelete}) {

  return (
    <div className="container">
      <div className={`${styles["my-row"]} row`}>
        <div className="col-6">{toDoName}</div>
        <div className="col-4">{toDoDate}</div>
        <div className="col-2">
          <button onClick={onClickDelete} type="button"  className={`btn btn-danger ${styles['my-button']}`}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
