import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoitems = ({ todoItem , onClickDelete }) => {
  return (
    <>
      <div className={styles.itemContainer}>
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
