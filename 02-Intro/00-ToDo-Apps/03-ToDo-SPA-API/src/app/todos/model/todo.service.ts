import { Injectable } from '@angular/core';
import { ToDo } from './todo.model';
import { HttpClient } from '@angular/common/http';

import { map, filter, catchError } from 'rxjs/operators'; // lettable operators are new since RxJS 5.5

import * as cuid from 'cuid';
import { Observable } from 'rxjs';

// const backendUrl = 'http://localhost:3456/todos';
// const backendUrl = 'http://localhost:4001/api/todos';
// const backendUrl = 'https://jba-todo-1.now.sh/api/todos';
const backendUrl = location.origin + '/api/todos';

@Injectable()
export class ToDoService {
  private clientId: string;

  constructor(private http: HttpClient) {
    this.clientId = localStorage.getItem('JBA-CLIENT-ID') as string;

    if (!this.clientId) {
      this.clientId = cuid();
      localStorage.setItem('JBA-CLIENT-ID', this.clientId);
    }
  }

  getTodos(): Observable<ToDo[]> {
    return this.http
      .get<{ data: ToDo[] }>(backendUrl, {
        headers: { 'xx-jba-client-id': this.clientId },
      })
      .pipe(
        map((res) =>
          res.data.map((r) => {
            const todo = new ToDo(r.title);
            todo.completed = r.completed;
            todo.id = r.id;
            return todo;
          })
        )
      );
  }

  saveTodo(todo: ToDo): Observable<ToDo> {
    return this.http
      .post(backendUrl, todo, {
        headers: { 'xx-jba-client-id': this.clientId },
      })
      .pipe(
        map((response: any) => {
          const data = response.data;
          const persistedToDo = new ToDo(data.title);
          persistedToDo.completed = data.completed;
          persistedToDo.id = data.id;
          return persistedToDo;
        })
      );
  }

  updateTodo(todo: ToDo): Observable<ToDo> {
    return this.http.put<ToDo>(`${backendUrl}/${todo.id}`, todo, {
      headers: { 'xx-jba-client-id': this.clientId },
    });
  }

  deleteTodo(todo: ToDo): Observable<any> {
    return this.http.delete(`${backendUrl}/${todo.id}`, {
      headers: { 'xx-jba-client-id': this.clientId },
    });
  }
}
