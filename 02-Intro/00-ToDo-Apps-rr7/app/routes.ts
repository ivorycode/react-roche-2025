import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("./AppLayout.tsx", [
    index("./routes/todos.tsx"),
    route("done", "./routes/todos-done.tsx"),
    route("/:todoId/complete", "./routes/todo-complete.tsx"),
    route("/:todoId/delete", "./routes/todo-delete.tsx"),
  ]),
] satisfies RouteConfig;
