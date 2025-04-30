import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { loadToDos } from "../persistence.ts";
import type { ToDo } from "../model/todo.ts";

function DetailScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo>();

  useEffect(() => {
    const todos = loadToDos();
    setTodo(todos.find((t) => `${t.id}` == id));
  }, [id]);

  function doNavigate() {
    navigate("/done");
  }

  return (
    <div>
      <h3>Detail</h3>
      <div className="main" style={{ padding: 10 }}>
        <p>id: {todo?.id}</p>
        <p>Title: {todo?.title}</p>
        {todo?.completed ? <div>✅</div> : null}
      </div>
      <div>
        <button onClick={doNavigate}>Go Home</button>
        <br />
        <Link to="/">back</Link>
      </div>
    </div>
  );
}

export default DetailScreen;
