import React, { useEffect, useState } from 'react';
import { ToDoList } from './ToDoList';
import { ToDo } from '../api/types';
import { loadToDos, deleteToDo } from '../api/persistence';

function DoneScreen() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // using an IIFE since the effect function is not allowed to return a value (except the cleanup function)
    // and async functions implicitly return a promise
    (async () => {
      const todos = await loadToDos(1);
      setTodos(todos);
    })();
  }, []);

  async function removeToDo(toDo: ToDo) {
    setMessage('Saving ...');

    // "OPTIMISTIC UI"
    const newToDos = todos.filter(t => t.id !== toDo.id);
    setTodos(newToDos);
    await deleteToDo(toDo);

    // "PESSIMISTIC UI"
    // await deleteToDo(toDo);
    // setTodos(todos => todos.filter(t => t.id !== toDo.id));

    setMessage('');
  }

  const loadingIndicator = message ? <div>{message}</div> : null;

  return (
    <div>
      {loadingIndicator}
      <div className="main">
        <ToDoList todos={todos} onRemoveToDo={removeToDo} />
      </div>
    </div>
  );
}

export default DoneScreen;
