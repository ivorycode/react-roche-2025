import { NavLink } from "react-router";
import { ToDo } from "../model/todo";

type ToDoListItemProps = {
  todo: ToDo;
  onRemoveToDo: (toDo: ToDo) => void;
};

function ToDoListItem({ todo, onRemoveToDo }: ToDoListItemProps) {
  return (
    <li>
      {todo.title}
      <NavLink
        to={`/detail/${todo.id}`}
        style={{ fontSize: "small", paddingLeft: 15 }}
      >
        ✏️
      </NavLink>
      <button onClick={() => onRemoveToDo(todo)}>X</button>
    </li>
  );
}

export default ToDoListItem;
