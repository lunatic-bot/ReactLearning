import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  // const handleAddButton = () => {
  //   onNewItem(todoName, todoDate);
  //   setTodoDate("");
  //   setTodoName("");
  // };

  const handleAddButton = (event) => {
    // console.log(event);
    event.preventDefault();
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form action="" className="row todo-row" onSubmit={handleAddButton}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            // type="button"
            className="btn btn-success todo-button"
            // onClick={handleAddButton}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
