const ErrorMessage = ({ items }) => {
  //   let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  return <>{items.length == 0 && <h3>I am still Hungry</h3>}</>;
};

export default ErrorMessage;
