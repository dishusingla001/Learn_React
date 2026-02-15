import styles from "./Items.module.css";

const Items = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`${styles["my-item"]} list-group-item ${bought && 'active'}`}>

      <span className={styles["my-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton} value="buy"
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
