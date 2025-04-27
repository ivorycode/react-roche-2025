import { data } from "react-router";
import { commitSession, getSession } from "~/session.server";
import { ToDoList } from "~/components/ToDoList";
import { fetchTodos } from "~/api/api";
import type { Route } from "../../.react-router/types/app/routes/+types/todos-done";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const requestUserId = session.get("userId");

  const { todos, userId } = await fetchTodos(requestUserId, true);
  session.set("userId", userId);

  // It's probably not state-of-the Art to (re-)set the cookie on each request
  return data(todos, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export default function TodosDone({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <ToDoList todos={loaderData} onRemoveAction="delete" />
    </div>
  );
}
