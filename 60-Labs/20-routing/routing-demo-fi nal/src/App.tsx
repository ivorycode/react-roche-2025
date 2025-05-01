import './App.css'
import {createBrowserRouter, Link, Navigate, Outlet, RouterProvider} from 'react-router';
import {lazy, Suspense} from 'react';
// import {Home} from './Home.tsx';
// import {About} from './About.tsx';

const Home = lazy(() => import('./Home.tsx'))
const About = lazy(() => import('./About.tsx'))


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '*',
        element: <Navigate to="/" />
      }
    ]
  }
])



export default function App() {
  return (
    <>
      <h1>Demo</h1>
      <RouterProvider router={router}/>
    </>
  )
}

function Layout() {

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">ABout</Link>
      <h2>Layout</h2>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet/>
      </Suspense>
    </div>
  )
}


/* DEMO:
npm i react-router

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
  }
]);


<RouterProvider router={router}/>

-----

children: [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/about',
    element: <About/>,
  }
],

-----

<nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
</nav>

----

Extract Routes into their own file

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

<Suspense/>


  
 */

