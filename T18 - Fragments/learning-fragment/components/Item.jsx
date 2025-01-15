import styles from "./Item.module.css";

const Item = (props) => {
  let { foodItem } = props;
  return (
    <li className={`${styles["fd-item"]} list-group-item`}>
      <span className={styles["food-span"]}>{foodItem}</span>
    </li>
  );

  //   return <li className="list-group-item">{props.foodItem}</li>;
};

export default Item;
