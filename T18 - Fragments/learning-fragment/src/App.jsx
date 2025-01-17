import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import FoodItems from "../components/FoodItems";
import ErrorMessage from "../components/ErrorMessage";
import Container from "../components/Container";
import FoodInput from "../components/FoodInput";

function App() {
  // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  // let foodItems = [];

  // let textStateArr = useState("Food Items entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();

  let [foodItems, setFoodItems] = useState([]);

  // console.log(`current value of textState: ${textToShow}`);

  // let textToShow = "Food Items entered by user";

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
    // console.log(event.target.value);
    // setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Above is the healthy foods that are good for your health and well
          being.
        </p>
      </Container> */}
    </>
    // <React.Fragment>
    // <>
    //   <h1 className="food-heading">Healthy Foods</h1>
    //   {/* {foodItems.length == 0 ? <h3>I am still Hungry</h3> : null} */}
    //   <ErrorMessage items={foodItems}></ErrorMessage>
    //   <FoodItems items={foodItems}></FoodItems>

    //   {/* <h1>Healthy Foods</h1>
    //   <ul class="list-group">
    //     <li class="list-group-item">Dal</li>
    //     <li class="list-group-item">Green Vegetable</li>
    //     <li class="list-group-item">Roti</li>
    //     <li class="list-group-item">Salad</li>
    //     <li class="list-group-item">Milk</li>
    //   </ul> */}
    // </>
    // </React.Fragment>
  );
}

export default App;
