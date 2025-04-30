import { useState, useEffect } from 'react';
import { loadToDos, storeNewToDo, storeToDoAsCompleted } from '../persistence';
import { ToDo } from '../model/todo';
import { NewToDoForm } from './NewToDoForm';
import { ToDoList } from './ToDoList';

export default function ToDoScreen() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    const todos = loadToDos();
    setPendingToDos(todos);
  }, []);

  function addToDo(title: string) {
    const newToDo = { id: Math.random().toString(), title: title, completed: false };
    const allToDos = storeNewToDo(newToDo);
    setPendingToDos(allToDos);
  }

  function completeToDo(toDo: ToDo) {
    const allToDos = storeToDoAsCompleted(toDo);
    setPendingToDos(allToDos);
  }

  function setPendingToDos(updatedToDos: ToDo[]) {
    const pendingToDos = updatedToDos.filter(t => !t.completed);
    setTodos(pendingToDos);
  }

  return (
    <section className="todoapp">
      <NewToDoForm onAddToDo={addToDo} />

      <div className="main">
        <ToDoList todos={todos} onRemoveToDo={completeToDo} />
      </div>
    </section>
  );
}
