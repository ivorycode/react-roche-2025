import { useEffect, useState } from 'react';
import { deleteToDo, loadToDos } from '../persistence';
import { ToDoList } from './ToDoList';
import { ToDo } from '../model/todo';

export default function DoneScreen() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    const todos = loadToDos();
    setDoneToDos(todos);
  }, []);

  function removeToDo(toDo: ToDo) {
    const allToDos = deleteToDo(toDo);
    setDoneToDos(allToDos);
  }

  function setDoneToDos(updatedToDos: ToDo[]) {
    const pendingToDos = updatedToDos.filter(t => t.completed);
    setTodos(pendingToDos);
  }

  return (
    <div>
      <div className="main">
        <ToDoList todos={todos} onRemoveToDo={removeToDo} />
      </div>
    </div>
  );
}
