import { type ChangeEvent, useEffect, useState } from "react";
import { useFetcher } from "react-router";

export function NewToDoForm() {
  const [toDoTitle, setToDoTitle] = useState("");
  const fetcher = useFetcher();

  function formChange(e: ChangeEvent<HTMLInputElement>) {
    setToDoTitle(e.target.value);
  }

  // Reset form when submission is successful
  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data != null) {
      setToDoTitle(""); // Clear the input field after successful submission
    }
  }, [fetcher.state, fetcher.data]);

  console.log("TODO FORM", fetcher.state, fetcher.data, toDoTitle);
  return (
    <fetcher.Form method="POST" className="new-todo">
      <input
        id="todo-text"
        name="title"
        type="text"
        placeholder="What needs to be done?"
        autoFocus
        autoComplete="off"
        value={toDoTitle}
        onChange={formChange}
      />

      <button id="add-button" className="add-button">
        +
      </button>
    </fetcher.Form>
  );
}
