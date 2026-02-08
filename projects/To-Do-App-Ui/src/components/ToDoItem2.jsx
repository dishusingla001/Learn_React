function ToDoItem2() {
  let toDoName = "Buy Milk";
  let toDoDate = "04/10/2026";

  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">{toDoName}</div>
        <div className="col-4">{toDoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger my-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem2;
