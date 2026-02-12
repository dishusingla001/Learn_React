import styles from "./Items.module.css";

const Items = ({ foodItem }) => {
  // let {foodItem} = props;

  const handleBuyButton = (event) => {
    console.log(event);
    console.log(`item being bought : ${foodItem}`);
  }

  return (
    <li className={`${styles["my-item"]} list-group-item`}>
      <span className={styles["my-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event)=>{
          handleBuyButton(event);
        }}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
