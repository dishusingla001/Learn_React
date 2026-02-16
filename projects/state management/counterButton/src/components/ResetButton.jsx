import styles from "./AddButton.module.css";

const ResetButton = ({resetCount}) => {
  return <button className={`${styles.myButton} btn btn-danger`} value="reset" onClick={resetCount}>Reset</button>
}

export default ResetButton;