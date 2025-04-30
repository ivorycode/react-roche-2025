import { useState, ChangeEvent } from "react";
import "./App.css";

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export function App() {
  const [toDoTitle, setToDoTitle] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);

  function inputChange(e: ChangeEvent<HTMLInputElement>) {
    setToDoTitle(e.target.value);
  }

  function addToDo() {
    if (toDoTitle.length > 3) {
      const newToDos = [
        ...todos,
        { id: Math.random(), title: toDoTitle, completed: false },
      ];
      setTodos(newToDos);
      setToDoTitle("");
    }
  }

  function removeToDo(toDo: ToDo) {
    const newToDos = todos.filter((t) => t !== toDo);
    setTodos(newToDos);
  }

  let submitButton = null;
  if (toDoTitle.length > 3) {
    submitButton = (
      <button id="add-button" className="add-button">
        +
      </button>
    );
  }

  return (
    <div className="App">
      <div className="todoapp-header">
        <h1 id="title">Simplistic ToDo</h1>
        <h4>A most simplistic ToDo List in React.</h4>
      </div>

      <section className="todoapp">
        <form action={addToDo} className="new-todo">
          <input
            id="todo-text"
            name="toDoTitle"
            type="text"
            placeholder="What needs to be done?"
            autoFocus
            autoComplete="off"
            value={toDoTitle}
            onChange={inputChange}
          />
          {submitButton}
        </form>

        <div className="main">
          <ul id="todo-list" className="todo-list">
            {todos.map((t) => (
              <li key={t.id}>
                {t.title}
                <button onClick={() => removeToDo(t)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer className="info">
        <p>
          JavaScript Example / Initial template from{" "}
          <a href="https://github.com/tastejs/todomvc-app-template">
            todomvc-app-template
          </a>
        </p>
      </footer>
    </div>
  );
}
