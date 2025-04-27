import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/todo.model';
import { ToDoService } from '../../model/todo.service';

@Component({
  templateUrl: './overview.component.html',
  providers: [ToDoService],
})
export class OverviewComponent implements OnInit {
  todos: ToDo[] = [];
  doneToDos: ToDo[] = [];

  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.loadToDos();
  }

  addToDo(todo: ToDo) {
    this.todos.push(todo); // optimistic ui
    this.todoService
      .saveTodo(todo)
      .subscribe(
        (persistedTodo: ToDo) => (todo.id = persistedTodo.id),
        this.handleError
      );
  }

  completeToDo(todo: ToDo) {
    this.todos = this.todos.filter((t) => t !== todo); // optimistic ui
    todo.completed = true;
    this.todoService.updateTodo(todo).subscribe(
      // () => this.loadToDos(), // pessimistic ui
      () => {}, // optimistic ui
      this.handleError
    );
  }

  private loadToDos() {
    return this.todoService.getTodos().subscribe((todos: ToDo[]) => {
      this.todos = todos.filter((t) => !t.completed);
      this.doneToDos = todos.filter((t) => t.completed);
    });
  }

  private handleError(error: any) {
    const errMsg = error.message || 'Error calling server';
    console.error(errMsg);
    alert('Error: Calling the server failed!');
    window.location.reload();
  }
}
