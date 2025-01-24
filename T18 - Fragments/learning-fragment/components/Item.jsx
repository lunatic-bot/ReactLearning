import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being bought`);
  // };

  // let { foodItem } = props;
  return (
    <li
      className={`${styles["fd-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["food-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // onClick={(event) => handleBuyButtonClicked(event)}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );

  //   return <li className="list-group-item">{props.foodItem}</li>;
};

export default Item;
