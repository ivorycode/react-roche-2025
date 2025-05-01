import { Suspense, useEffect, useState } from "react";
import "./App.css";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  NavLink,
  useLoaderData,
  defer,
  Await,
  useSubmit,
} from "react-router";
import { Demo } from "./Demo.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Demo />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <h1>Demo</h1>
      <div className="card">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </div>
    </>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

function About() {
  console.log("Render About");
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
