import './App.css'

export default function App() {
  return (
    <>
      <h1>Demo</h1>
      <Layout>
        <Home/>
        <About/>
      </Layout>
    </>
  )
}

function Layout({ children}: { children?: React.ReactNode }) {
  return (
    <div>
      <h2>Layout</h2>
      {children}
    </div>
  )
}

function Home() {
  console.log('Render Home');
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  console.log('Render About');
  return (
    <div>
      <h2>About</h2>
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

