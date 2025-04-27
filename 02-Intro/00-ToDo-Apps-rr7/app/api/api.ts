import crypto from "crypto";
import type { ToDo } from "./types";

export async function fetchTodos(
  userId: string | undefined,
  completed: boolean,
) {
  console.log("FETCH TODO USER ID", userId);

  if (!userId) {
    userId = crypto.randomUUID();
    console.log("ROOT CREATED USER ID", userId);
  }

  const data = await fetch(
    `https://spa-demo.fly.dev/api/todos?completed=${completed ? 1 : 0}`,
    {
      headers: {
        "xx-jba-client-id": userId ?? "",
      },
    },
  );

  const responseData = await data.json();
  return { todos: responseData.data as ToDo[], userId };
}

export async function fetchToDo(userId: string, todoId: string) {
  const todoResponse = await fetch(
    `https://spa-demo.fly.dev/api/todos/${todoId}`,
    {
      headers: {
        "xx-jba-client-id": userId,
        "Content-Type": "application/json",
      },
    },
  );
  const toDoResponseData = await todoResponse.json();
  const toDo = toDoResponseData.data as ToDo;
  return toDo;
}

export async function addTodo(userId: string, newToDo: ToDo) {
  const data = await fetch("https://spa-demo.fly.dev/api/todos", {
    method: "POST",
    headers: {
      "xx-jba-client-id": userId,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newToDo),
  });
  const persistedToDo = await data.json();
  return persistedToDo;
}

export async function updateTodo(userId: string, updatedToDo: ToDo) {
  const data = await fetch(
    `https://spa-demo.fly.dev/api/todos/${updatedToDo.id}`,
    {
      method: "PUT",
      headers: {
        "xx-jba-client-id": userId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToDo),
    },
  );
}

export async function deleteTodo(userId: string, todoId: string) {
  await fetch(`https://spa-demo.fly.dev/api/todos/${todoId}`, {
    method: "DELETE",
    headers: {
      "xx-jba-client-id": userId,
      "Content-Type": "application/json",
    },
  });
}
