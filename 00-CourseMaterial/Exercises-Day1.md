# React Workshop



## Exercise 0: Three Apps

Compare the three ToDo-applications at the following urls:

- [https://spa-demo.fly.dev/todo1/](https://spa-demo.fly.dev/todo1/)
- [https://spa-demo.fly.dev/11-todo/](https://spa-demo.fly.dev/11-todo/)
- [https://spa-demo.fly.dev/12-todo/](https://spa-demo.fly.dev/12-todo/)
- [https://spa-demo-ssr.fly.dev/](https://spa-demo-ssr.fly.dev/)

What can you find out about their technical implementation?  What are the differences?

(The source code for the three examples is in `01-Intro/00-ToDo-Apps` and `01-Intro/00-ToDo-Apps-rr7`)



## Exercise 1: Create a React Project

Set up a new React project:

```bash
npm create vite@latest	
```

Choose the following options:

```
❯ npm create vite@latest
Need to install the following packages:
  create-vite@4.2.0
Ok to proceed? (y) y
✔ Project name: … my-react-project
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC
```

Start the project:

```bash
  cd my-react-project
  npm install
  npm run dev
```

Open your browser at:
http://localhost:5173/



### 1.1 Running in development mode

Inspect the generated app ...  
Open the browser developer tools and inspect the resources the browser actually loads over the network.  
Change the displayed text of the app.

Debug the app in Chrome:

- Open developer tools
- Open the sources tab
- Open the component sources: Hit Ctrl-P and type 'App.tsx'
- Set a breakpoint in the render method



### 1.2 Creating a Production Build

Create the production artifacts:

	npm run build 

Inspect the contents of `dist`.  

The production build can be served with:
```
npm run preview
```



The content of `dist` can be served with any webserver.  
We can use the npm package `serve` as a simple webserver:

	npx serve -s dist

Open the browser developer tools and inspect the resources the browser actually loads over the network.  
What are the differences to the development build?



## Exercise 2: Write your first component

In the project directory you created in exercise 1 (or in `01-Starter/awesome-react`):

- Create a `Greeter` component that displays "Hello World"
- Use the component in the existing `App`-Component
- Change the `Greeter`-Component: It should have a input where you can type your name and below the input the message "Hello <name>" should be displayed.
- (Optional) Try to debug by using the "React Developer Tools" extension in Chrome/Firefox.
- (Optional) Write a test for the `Greeter`-Component so that this behaviour is checked.




## Exercise 3: ToDo App - Basic Functionality

Implement a simple ToDo App.

Start with the prepared project `40-ToDoApp/00-todo-starter`:

```
npm install
npm run dev
```

Implement the functionality of the ToDo App:

- Adding ToDos
- Removing ToDos	

Optional:

- Use a proper html-form: convert the `<div className="new-todo">...</div>` into a `<form className="new-todo">...</form>`
  - The new todo-item should then be added not only when clicking the "+"-button but also when pressing *enter* on the keyboard
    => Hint: handle the form submission instead of the button click ...
- Prevent todo-items with no title



## Exercise 4: ToDo App - Component Architecture

Split the ToDo App into smaller components:

- `App` component: This shoud be a *container component* that manages the state of the application.
- `NewToDo` component: Manages the user input for a new ToDo item.
- `ToDoList` component: Displays a list of ToDo items.
- `ToDoListItem` component: Displays a single ToDo item. Converts a DOM interactions to application logic.



## Exercise 5: ToDo App - Routing

**Recommended: Start with the project `40-ToDoApp/02-todo-components-solution`.  
The above solution saves the todo items into local storage.**

Note: If you start a project from scratch aou can use `create-tsrouter-router` to scaffold a new React project that has `@tanstack-router` already configured. 



In this exercise we are implementing a code-based route configuration of `@tanstack-router`:
https://tanstack.com/router/latest/docs/framework/react/quick-start#using-code-based-route-configuration

The documentation of `@tanstack-router` recommends to use a file based routing configuration:
https://tanstack.com/router/latest/docs/framework/react/quick-start#using-code-based-route-configuration




#### Step 1:
In `App.ts`: extract the content of the `App` component into a `Layout` component:

```
export function App(){
	return <Layout />
}

function Layout(){
	return (
		<div className="App"> ... </div>
	);
}
```



#### Step 2:

Add `tanstack-router` to the project:

```
npm install @tanstack/react-router
```

And add the necessary import for the next steps in `App.tsx`

```
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
```



#### Step 3:

In `App.tsx`: Introduce the router with a root-route:

```
const rootRoute = createRootRoute({
  component: <Layout/>
});
const router = createRouter({ routeTree: rootRoute });

export function App(){
	 return <RouterProvider router={router} />
}
```

Register the route definitiony to get the amazing type-safety of `@tanstack-router`:
```
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
```





#### Step 4:

In `App.tsx`: Add child routes to the root-route and an `<Outlet>` to the `Layout` component.

```
const todoRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: ToDoScreen
});
const doneRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/done',
	component: () => <h1>Work in progress ... </h1>
});
const routerTree = rootRoute.addChildren([todoRoute, doneRoute]);
const router = createRouter({ routeTree });
```

```
function Layout(){
	return (
		<div className="App">
			...
      <div className="nav">
        <Link to={todoRoute.to} activeProps={{ className: `active` }}>Pending</Link>
        <Link to={doneRoute.to} activeProps={{ className: `active` }}>Done</Link>
      </div>
      <section className="todoapp">
        <Outlet/>
      </section>
			...
    </div>
	);
}
```

Now you should have two screens: http://localhost:5173/ and http://localhost:5173/done



### Step 5:

Implement the `DoneScreen` and configure it on the `doneRoute` -> `component: DoneScreen`

- The `ToDoScreen` should only display todo-items that are not yet completed. Removing a todo-item on the `ToDoScreen` should mark it as completed.

- On the `DoneScreen` the list of completed todo-items should be displayed and removing an item should completely delete the item.



### Step 6:

Split the code in `App.tsx` into several files.

Bonus: `npm i @tanstack/react-router-devtools` and add `<TanStackRouterDevtools/>` at the bottom of the `<Layout/>` component.



## Exercise 5.1 (Optional): Scaffold a new project with @tanstack-router

Run the following command:

```
npx create-tsrouter-router@latest my-app
```

See the CLI options: https://github.com/TanStack/create-tsrouter-app/tree/main/cli/create-tsrouter-app


Folow the quick-start guide here: https://github.com/TanStack/create-tsrouter-app/tree/main/cli/create-tsrouter-app and explore the project setup. 



## Exercise 6: ToDo App - Backend Access

**Recommended: start with the project at `40-ToDoApp/04-todo-backend-starter`. This project already loads the  todo items from the server when the application is loaded.** 

Option: You can ylso start "from scratch" with you solution from exercise 5 of with the project `40-ToDoApp/03-todo-router-solution`.  

---

When you start "from scratch", then add `ky` to the poject:

	npm install ky

You can now use ky by importing it:

	import ky from 'ky';
	const response = await ky.get('http://www.example-api.com');	
	const data = await response.json<ResponseType>();

Study the documentation at: https://github.com/sindresorhus/ky

---

**Demo Backend:**

The directory `40-ToDoApp/_server` contains a simple API-Server implementing basic CRUD functionality for our ToDo application.
Start the server with the following commands:

	npm install 
	npm start

You should now get an array with one todo item at the url: `http://localhost:3456/todos`.

Your task is now to access this backend API from the ToDo application:

- When the application is loaded, all the todo items should be loaded from the server
- When a todo item is added, it should be saved to the server
- When a todo item is completed it should be updated on the server
- When a todo item is deleted, it should be deleted from the server.



The API provided by the REST-Endpoint is described in the table below:

| HTTP-Method | URL (example)                                                | Request-Body                            | Response                      |
| ----------- | ------------------------------------------------------------ | --------------------------------------- | ----------------------------- |
| GET         | http://localhost:3456/todos   *(optional query-parameter: ?completed=0 or 1)* |                                         | {result: [{*todo*},{*todo*}]} |
| GET         | http://localhost:3456/todos/1                                |                                         | {result: {*todo*} }           |
| POST        | http://localhost:3456/todos                                  | { "title": "Test", "completed": false}  | {result: {*todo*} }           |
| PUT         | http://localhost:3456/todos/1                                | { "title": "Test 2", "completed": true} | *empty*                       |
| DELETE      | http://localhost:3456/todos/1                                |                                         | *empty*                       |

Note that all responses are wrapped in a response object with a `result` property.
This is a typical security measure of JSON endpoints. See: http://stackoverflow.com/questions/3503102/what-are-top-level-json-arrays-and-why-are-they-a-security-risk

---

**Task:**

Implement the full CRUD-Cycle with adding, completing (updating) and deleting todo-items against the backend API.

