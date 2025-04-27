import { getSession } from "~/session.server";
import type { Route } from "../../.react-router/types/app/routes/+types/todo-complete";
import { fetchToDo, updateTodo } from "~/api/api";

export async function action({ params, request }: Route.ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  let userId = session.get("userId") as string;

  const todoId = params.todoId;

  const toDo = await fetchToDo(userId, todoId);
  toDo.completed = true;

  await updateTodo(userId, toDo);
  return null;
}
