import { useState, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  //   console.log(`no of updates are: ${noOfUpdates.current}`);
  // };

  // const handleAddButton = () => {
  //   onNewItem(todoName, todoDate);
  //   setTodoDate("");
  //   setTodoName("");
  // };

  const handleAddButton = (event) => {
    // console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, todoDate);
    // setTodoDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form action="" className="row todo-row" onSubmit={handleAddButton}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={todoDate}
            // onChange={handleDateChange}
          />
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
