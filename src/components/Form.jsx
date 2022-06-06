import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              placeholder="Enter to Todo..."
              className="task-input form-control "
              value={input}
              onChange={handleChange}
            />
          </div>
          <div className="col-1">
            {" "}
            <button type="submit" className="button-add btn btn-primary">
              {editTodo ? "OK" : "ADD"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
