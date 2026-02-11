import ToDoItem from "./ToDoItem";

const ToDoitems = ({ todoItems }) => {
  return (
    <>
      <div className="items-container">
        {
          todoItems.map((item)=>{
            return <ToDoItem key={item.toDoName} toDoName={item.toDoName} toDoDate={item.toDoDate} />
          })
        }
      </div>
    </>
  );
};

export default ToDoitems;
