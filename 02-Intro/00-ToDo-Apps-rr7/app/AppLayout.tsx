import { NavLink, Outlet } from "react-router";
import "./AppLayout.css";

export default function AppLayout() {
  return (
    <div className="App">
      <div className="todoapp-header">
        <h1 id="title">Simplistic ToDo</h1>
        <h4>A server-side rendered ToDo List in React.</h4>
      </div>

      <section className="todoapp">
        <div className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            Pending
          </NavLink>
          <NavLink
            to="/done"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            Done
          </NavLink>
        </div>

        <div className="main">
          <Outlet />
        </div>
      </section>

      <footer className="info">
        <p>
          JavaScript Example / Initial template from{" "}
          <a href="https://github.com/tastejs/todomvc-app-template">
            todomvc-app-template
          </a>
        </p>
      </footer>
    </div>
  );
}
