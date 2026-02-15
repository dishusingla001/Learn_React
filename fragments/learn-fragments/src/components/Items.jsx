import styles from "./Items.module.css";

const Items = ({ foodItem, handleBuyButton }) => {
  // let {foodItem} = props;
  return (
    <li className={`${styles["my-item"]} list-group-item`}>
      <span className={styles["my-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
