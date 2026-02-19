import styles from "./EnjoyMessage.module.css";

const EnjoyMessage = ({ toDoItem }) => {
  if (toDoItem.length === 0) {
    return (
      <>
        <h2 className={styles.header}>Enjoy Your Day</h2>
        <h4>No Pending Task</h4>
      </>
    );
  }
};

export default EnjoyMessage;
