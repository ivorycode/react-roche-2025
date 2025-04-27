import { useState, useEffect } from 'react';
import { loadToDos, saveToDo, updateToDo } from '../api/persistence';
import { ToDo } from '../api/types';
import { NewToDoForm } from './NewToDoForm';
import { ToDoList } from './ToDoList';

function ToDoScreen() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // using a nested async function since the effect function is not allowed to return a value (except the cleanup function)
    // and async functions implicitly return a promise
    loadData();
  }, []);

  async function loadData() {
    setMessage('Loading ...');
    const todos = await loadToDos();
    setTodos(todos);
    setMessage('');
  }

  async function addToDo(title: string) {
    const newToDo: ToDo = {
      id: Math.random(),
      title: title,
      completed: false,
    };

    // "OPTIMISTIC UI"
    const newToDos = [...todos, newToDo];
    setTodos(newToDos);
    setMessage('Saving ...');
    const persistedToDo = await saveToDo(newToDo);
    if (persistedToDo) {
      setTodos((todos) => {
        const updatedToDos = todos.map((t) =>
          t !== newToDo ? t : persistedToDo
        );
        return updatedToDos;
      });
    }
    setMessage('');

    // "PESSIMISTIC UI"
    // setMessage('Saving ...');
    // const persistedToDo = await saveToDo(newToDo);
    // if (persistedToDo) {
    //   setTodos(todos => [...todos, persistedToDo]);
    // }
    // setMessage('');
  }

  async function completeToDo(toDo: ToDo) {
    toDo.completed = true;

    // "OPTIMISTIC UI"
    const updatedToDos = todos.filter((t) => t.id !== toDo.id);
    setTodos(updatedToDos);
    setMessage('Saving ...');
    await updateToDo(toDo);
    setMessage('');

    // "PESSIMISTIC UI"
    // setMessage('Saving ...');
    // await updateToDo(toDo);
    // setTodos(todos => todos.filter(t => t.id !== toDo.id));
    // setMessage('');
  }

  const loadingIndicator = message ? <div>{message}</div> : null;

  return (
    <div>
      {loadingIndicator}
      <NewToDoForm onAddToDo={addToDo} />

      <div className="main">
        <ToDoList todos={todos} onRemoveToDo={completeToDo} />
      </div>
    </div>
  );
}

export default ToDoScreen;
