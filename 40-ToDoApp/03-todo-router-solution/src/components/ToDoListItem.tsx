import { ToDo } from '../model/todo';
import {Link} from '@tanstack/react-router';
import {detailRoute} from '../routes/detail/detail.route.ts';

type ToDoListItemProps = {
  todo: ToDo
  onRemoveToDo: (toDo: ToDo) => void
};

function ToDoListItem ({todo, onRemoveToDo}: ToDoListItemProps){
  console.log('RENDERING TO DO LIST ITEM', detailRoute.to)
    return (
    <li>
      <Link to={detailRoute.to} params={{todoId: `${todo.id}`}} className="">
      {todo.title}
        
      </Link>
      <button onClick={() => onRemoveToDo(todo)}>X</button>
    </li>
  );
}

export default ToDoListItem;
