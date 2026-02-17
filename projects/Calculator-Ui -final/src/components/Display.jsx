import styles from "./Display.module.css";

const Display = ({ nextValue,inputvalue }) => {
  return <input type="text" onChange={nextValue} value={inputvalue} className={styles.display} readOnly/>;
};

export default Display;
