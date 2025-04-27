import { data } from "react-router";
import { commitSession, getSession } from "~/session.server";
import { ToDoList } from "~/components/ToDoList";
import { NewToDoForm } from "~/components/NewToDoForm";
import { addTodo, fetchTodos } from "~/api/api";
import type { Route } from "../../.react-router/types/app/routes/+types/todos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Simple ToDo" },
    { name: "description", content: "A simple todo app." },
  ];
}

export async function loader({ request, context }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const requestUserId = session.get("userId");
  console.log("TODO SCREEN USER ID", requestUserId);

  const { todos, userId } = await fetchTodos(requestUserId, false);
  session.set("userId", userId);

  // It's probably not state-of-the Art to (re-)set the cookie on each request
  return data(todos, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function action({ request }: Route.ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  let userId = session.get("userId") as string;

  const formData = await request.formData();
  const newToDo = Object.fromEntries(formData) as any;
  newToDo.completed = false;

  const persistedToDo = await addTodo(userId, newToDo);
  return persistedToDo; // the client expects a return value to clear the form
}

export default function Todos({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <NewToDoForm />
      <ToDoList todos={loaderData} onRemoveAction="complete" />
    </>
  );
}
