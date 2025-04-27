import { getSession } from "~/session.server";
import type { Route } from "../../.react-router/types/app/routes/+types/todo-delete";
import { deleteTodo } from "~/api/api";

export async function action({ params, request }: Route.ActionArgs) {
  const todoId = params.todoId;

  const session = await getSession(request.headers.get("Cookie"));
  let userId = session.get("userId") as string;

  deleteTodo(userId, todoId);

  return null;
}
