import type { ToDo } from "~/api/types";
import { useFetcher } from "react-router";

export type OnRemoveAction = "complete" | "delete";
type ToDoListItemProps = {
  todo: ToDo;
  onRemoveAction: OnRemoveAction;
};

function ToDoListItem({ todo, onRemoveAction }: ToDoListItemProps) {
  const fetcher = useFetcher();
  let removeButton = null;
  if (todo.id && todo.id >= 1) {
    removeButton = (
      <fetcher.Form method="POST" action={`/${todo.id}/${onRemoveAction}`}>
        <button>X</button>
      </fetcher.Form>
    );
  }

  return (
    <li>
      {todo.title}
      {removeButton}
    </li>
  );
}

export default ToDoListItem;
