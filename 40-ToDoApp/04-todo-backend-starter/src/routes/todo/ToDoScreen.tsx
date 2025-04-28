import { NewToDoForm } from '../../components/NewToDoForm.tsx';
import { ToDoList } from '../../components/ToDoList.tsx';
import { useEffect, useState } from 'react';
import type {ToDo} from '../../api/types.ts';
import {loadToDos} from '../../api/persistence.ts';

export function ToDoScreen() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    // using a nested async function since the effect function is not allowed to return a value (except the cleanup function)
    // and async functions implicitly return a promise
    async function loadData() {
      const todos = await loadToDos();
      setTodos(todos);
    }
    loadData();
  }, []);

  async function addToDo(newToDo: ToDo) {
    // TODO: call and implement the saveToDo function which calls the API 
  }

  async function completeToDo(toDo: ToDo) {
    // TODO: call and implement the updateToDo function which calls the API 
  }

  return (
    <>
      <NewToDoForm onAddToDo={addToDo} />

      <div className="main">
        <ToDoList todos={todos} onRemoveToDo={completeToDo} />
      </div>
    </>
  );
}
