import { ChangeEvent, useState } from 'react';
import { ToDo } from '../model/todo';

interface NewToDoFormProps {
  onAddToDo: (todo: ToDo) => void;
}

export function NewToDoForm({ onAddToDo }: NewToDoFormProps) {
  const [toDoTitle, setToDoTitle] = useState('');

  function formChange(e: ChangeEvent<HTMLInputElement>) {
    setToDoTitle(e.target.value);
  }

  function addToDo() {
    if (toDoTitle.length > 3) {
      const newToDo: ToDo = {
        id: Math.random(),
        title: toDoTitle,
        completed: false,
      };
      onAddToDo(newToDo);
      setToDoTitle('');
    }
  }

  return (
    <form action={addToDo} className="new-todo">
      <input
        id="todo-text"
        name="toDoTitle"
        type="text"
        placeholder="What needs to be done?"
        autoFocus
        autoComplete="off"
        value={toDoTitle}
        onChange={formChange}
      />

      <button id="add-button" className="add-button">
        +
      </button>
    </form>
  );
}
