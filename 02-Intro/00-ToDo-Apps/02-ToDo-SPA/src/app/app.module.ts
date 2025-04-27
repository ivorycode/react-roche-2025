import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './todos/components/overview/overview.component';
import { NewTodoComponent } from './todos/components/new-todo/new-todo.component';
// import { NewTodoComponent } from './todos/components/new-todo-reactive/new-todo.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/components/todo-item/todo-item.component';
import { DoneTodosComponent } from './todos/components/done-todos/done-todos.component';
import {ToDoService} from './todos/model/todo.service';
import { CapitalLetterValidatorDirective } from './todos/components/new-todo/capital-letter-validator.directive';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    NewTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    DoneTodosComponent,
    CapitalLetterValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ToDoService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
