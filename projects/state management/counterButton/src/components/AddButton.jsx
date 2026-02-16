import styles from "./AddButton.module.css";

const AddButton = ({buttonCount}) => {
  return (
    <button className={`${styles.myButton} btn btn-primary`} value="add" onClick={buttonCount}>Add</button>
  )
}

export default AddButton;