import { useEffect, useState } from 'react';
import { ToDo } from '../../model/todo.ts';
import { loadToDos } from '../../persistence.ts';
import {detailRoute} from './detail.route.ts';

export function DetailScreen() {
  const [todo, setTodo] = useState<ToDo>();
  const params = detailRoute.useParams();

  useEffect(() => {
    const todos = loadToDos();
    setTodo(todos.find((t) => `${t.id}` == params.todoId));
  }, [params.todoId]);

  return (
    <div>
      <div className="main" style={{padding: 10}}>
        <h2>Detail</h2>
        <div>{todo?.id}</div>
        <div>{todo?.title}</div>
        { todo?.completed ? <div>✅</div> : null }
      </div>
    </div>
  );
}
