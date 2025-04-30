import { NewToDoForm } from './NewToDoForm';
import { ToDoList } from './ToDoList';
import { useEffect, useState } from 'react';
import { ToDo } from '../model/todo';
import { deleteToDo, loadToDos, storeNewToDo } from '../persistence';

export function ToDoScreen() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    const todos = loadToDos();
    setTodos(todos);
  }, []);

  function addToDo(newToDo: ToDo) {
    const allToDos = storeNewToDo(newToDo);
    setTodos(allToDos);
  }

  function removeToDo(toDo: ToDo) {
    const allToDos = deleteToDo(toDo);
    setTodos(allToDos);
  }

  return (
    <div>
      <NewToDoForm onAddToDo={addToDo} />

      <div className="main">
        <ToDoList todos={todos} onRemoveToDo={removeToDo} />
      </div>
    </div>
  );
}
