import React from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <>
      {todos.map((todo) => (
        <li className="list-item mb-3" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list mb-2 form-control form-control-sm ${
              todo.completed ? "completed" : ""
            }`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="btn btn-secondary mr-3"
              onClick={() => handleComplete(todo)}
            >
              Complete <FaCheck />
            </button>
            <button
              className="btn btn-success mr-3"
              onClick={() => handleEdit(todo)}
            >
              Edit <FaEdit />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(todo)}
            >
              Delete <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default TodoList;
