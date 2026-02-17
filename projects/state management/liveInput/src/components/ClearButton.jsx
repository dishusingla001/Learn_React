import styles from "./ClearButton.module.css";

const ResetButton = ({clearValue}) => {
  return <button className={`${styles.myButton} btn btn-danger`} onClick={clearValue}>Clear</button>
}

export default ResetButton;