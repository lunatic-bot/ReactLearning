import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMsg";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "11/01/2025",
    },
    {
      name: "Go to College",
      dueDate: "11/01/2025",
    },
  ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`NewItem added : ${itemName} Date${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];

    setTodoItems(newTodoItems);
  };

  const HandleDeleteItem = (todoItemName) => {
    // console.log(`Item deleted: ${todoItemName}`);
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={HandleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
