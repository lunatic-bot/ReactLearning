import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from "../components/FoodItems";
import ErrorMessage from "../components/ErrorMessage";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  // let foodItems = [];

  return (
    // <React.Fragment>
    <>
      <h1 className="food-heading">Healthy Foods</h1>
      {/* {foodItems.length == 0 ? <h3>I am still Hungry</h3> : null} */}
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>

      {/* <h1>Healthy Foods</h1>
      <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Green Vegetable</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Milk</li>
      </ul> */}
    </>
    // </React.Fragment>
  );
}

export default App;
