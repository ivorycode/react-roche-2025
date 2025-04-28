import {ToDoList} from '../../components/ToDoList.tsx';
import {useEffect, useState} from 'react';
import type {ToDo} from '../../api/types.ts';
import {loadToDos} from '../../api/persistence.ts';

export function DoneScreen() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    // using an IIFE since the effect function is not allowed to return a value (except the cleanup function)
    // and async functions implicitly return a promise
    (async () => {
      const todos = await loadToDos(1);
      setTodos(todos);
    })();
  }, []);

  async function removeToDo(toDo: ToDo) {
    // TODO: implement and call the deleteToDo function which calls the API 
  }

  return (
    <>
      <div className="main">
        <ToDoList todos={todos} onRemoveToDo={removeToDo}/>
      </div>
    </>
  );
}
