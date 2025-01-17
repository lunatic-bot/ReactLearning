import Item from "./Item";

const FoodItems = ({ items }) => {
  //   let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButton={() => console.log(`${item} Bought`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
