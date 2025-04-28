import { useState } from 'react'
import './App.css'

export function App() {


    return (
        <div className="App">

            <div className="todoapp-header">
                <h1 id="title">Simplistic ToDo</h1>
                <h4>A most simplistic ToDo List in React.</h4>
            </div>

            <section className="todoapp">

                <div className="new-todo">
                    <input id="todo-text" name="toDoTitle"
                           type="text" placeholder="What needs to be done?"
                           autoFocus
                           autoComplete="off"
                    />
                    <button id="add-button" className="add-button">+</button>
                </div>

                <div className="main">
                    <ul id="todo-list" className="todo-list">
                        <li>
                            ToDo Item
                            <button>X</button>
                        </li>
                    </ul>
                </div>
            </section>
            <footer className="info">
                <p>JavaScript Example / Initial template from <a
                    href="https://github.com/tastejs/todomvc-app-template">todomvc-app-template</a>
                </p>
            </footer>
        </div>
    );
}
