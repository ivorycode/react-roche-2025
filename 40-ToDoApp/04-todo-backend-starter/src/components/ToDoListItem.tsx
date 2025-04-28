import type {ToDo} from '../api/types.ts';

type ToDoListItemProps = {
  todo: ToDo
  onRemoveToDo: (toDo: ToDo) => void
};

function ToDoListItem({todo, onRemoveToDo}: ToDoListItemProps) {
  return (
    <li style={{display: 'flex', justifyContent: 'space-between'}}>
      {todo.title}
      <button onClick={() => onRemoveToDo(todo)}>X</button>
    </li>
  );
}

export default ToDoListItem;
