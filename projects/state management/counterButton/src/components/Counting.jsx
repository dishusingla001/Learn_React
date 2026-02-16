import styles from "./Counting.module.css";

const Counting = ({count}) =>{
  return <p className={styles.countNumber}>{count}</p>
}

export default Counting;