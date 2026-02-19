import styles from "./Container.module.css";

const Container = (props) => {
  return <>
  <div className={styles.mainContainer}>
    <div className={styles.container}>{props.children}</div>
  </div>
  </>
}

export default Container;