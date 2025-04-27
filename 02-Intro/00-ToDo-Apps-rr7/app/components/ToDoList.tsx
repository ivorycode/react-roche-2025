import ToDoListItem, { type OnRemoveAction } from "./ToDoListItem";
import type { ToDo } from "~/api/types";

type ToDoListProps = {
  todos: ToDo[];
  onRemoveAction: OnRemoveAction;
};

export function ToDoList({ todos, onRemoveAction }: ToDoListProps) {
  return (
    <ul id="todo-list" className="todo-list">
      {todos.map((t) => (
        <ToDoListItem key={t.id} todo={t} onRemoveAction={onRemoveAction} />
      ))}
    </ul>
  );
}
