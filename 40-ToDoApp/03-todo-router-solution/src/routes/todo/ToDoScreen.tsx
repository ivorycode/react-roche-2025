import { NewToDoForm } from '../../components/NewToDoForm.tsx';
import { ToDoList } from '../../components/ToDoList.tsx';
import { useEffect, useState } from 'react';
import { ToDo } from '../../model/todo.ts';
import { loadToDos, storeNewToDo, storeToDoAsCompleted} from '../../persistence.ts';

export function ToDoScreen() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    const todos = loadToDos();
    setTodos(todos.filter((t) => !t.completed));
  }, []);

  function addToDo(newToDo: ToDo) {
    const allToDos = storeNewToDo(newToDo);
    setTodos(allToDos.filter((t) => !t.completed));
  }

  function completeToDo(toDo: ToDo) {
    const allToDos = storeToDoAsCompleted(toDo);
    setTodos(allToDos.filter((t) => !t.completed));
  }

  return (
    <div>
      <NewToDoForm onAddToDo={addToDo} />

      <div className="main">
        <ToDoList todos={todos} onRemoveToDo={completeToDo} />
      </div>
    </div>
  );
}
