import ToDoItem from "./ToDoItem";

const ToDoitems = ({ todoItem , onClickDelete }) => {
  return (
    <>
      <div className="items-container">
        {
          todoItem.map((item)=>{
            return <ToDoItem onClickDelete={()=>{onClickDelete(item)}} key={item.toDoName} toDoName={item.toDoName} toDoDate={item.toDoDate} />
          })
        }
      </div>
    </>
  );
};

export default ToDoitems;
