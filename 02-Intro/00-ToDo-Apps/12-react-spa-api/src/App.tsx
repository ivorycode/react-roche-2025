import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export function App() {
  return (
    <div className="App">
      <div className="todoapp-header">
        <h1 id="title">Simplistic ToDo</h1>
        <h4>A most simplistic ToDo List in React.</h4>
      </div>

      <section className="todoapp">
        <RouterProvider router={router} />
      </section>

      <footer className="info">
        <p>
          JavaScript Example / Initial template from{' '}
          <a href="https://github.com/tastejs/todomvc-app-template">
            todomvc-app-template
          </a>
        </p>
      </footer>
    </div>
  );
}
