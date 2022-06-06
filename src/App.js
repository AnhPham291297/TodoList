import "./styles.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  // const initialState = localStorage.getItem("todos")
  //   ? JSON.parse(localStorage.getItem("todos"))
  //   : [];
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container mt-5">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>

        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <hr />
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}
