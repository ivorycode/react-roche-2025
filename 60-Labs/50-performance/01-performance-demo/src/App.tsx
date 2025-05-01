import { useState, memo, useMemo, useCallback } from "react";
import "./App.css";
import { doCalculations } from "./utils.ts";

console.log("Starting ....");
const result = "Looking good!";

// DEMO 1: slow calculation when module is loaded (before rendering)
// const result = doCalculations(8);

export function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState(`Everything is awesome!`);

  // DEMO 2: slow calculation when state is initialized
  // - the calculation is performed also on each re-render!
  // - optimization with lazy initialization of `useState`
  // const [title, setTitle] = useState(`${doCalculations(4)}`);

  const myData = { prop1: count };
  // DEMO 4 optimization: prevent rerendering of child by memoizing property value
  // const myData = useMemo(() => ({ prop1: count }), [count]);

  const increment = () => setCount((count) => count + 1);
  // DEMO 5 optimization: prevent rerendering of child by memoizing callback
  // const increment = useCallback(() => setCount((count) => count + 1), [count]);

  console.log("App render");
  return (
    <div style={{ backgroundColor: "pink", padding: 5 }}>
      <div className="card">
        <h2>App: {result}</h2>
        <div className="spinner">
          <img src="/spinner.gif" />
          <p>Use Firefox to check smoothness of the animation!</p>
        </div>
        <button onClick={increment}>count is {count}</button>
        <h3>{title}</h3>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <Parent />
      {/*DEMO 4: pass property to the component
        - optimization: prevent rerendering with `useMemo`*/}
      {/*<Parent data={myData} />*/}
      {/*DEMO 5: pass callback to the component
        - optimization: prevent rerendering with `useCallback` */}
      {/*<Parent data={myData} increment={increment} />*/}
    </div>
  );
}

type ParentProps = {
  data?: { prop1: number };
  increment?: () => void;
};
function Parent({ data, increment }: ParentProps) {
  const result = "Fast as lightning!";

  // DEMO 3: slow calculation when component is rendered
  // - optimization: prevent rerendering by wrapping the component with `memo`
  // const result = doCalculations(5);
  // DEMO 6: with the React compiler, the above calue is also memoized ...
  // const result = doCalculations((data!.prop1! % 5) + 2 ?? 5);

  console.log("Parent render");

  function doIncrement() {
    console.log("Incrementing");
    increment?.();
  }

  return (
    <div style={{ backgroundColor: "yellow", padding: 5, margin: 5 }}>
      <h2>Parent: {result}</h2>
      <h3>{data?.prop1 ?? "Default"}</h3>
      <button onClick={doIncrement}>Increment</button>
      <Child />
    </div>
  );
}

function Child() {
  console.log("Child render");
  return (
    <div style={{ backgroundColor: "cyan" }}>
      <h2>Child</h2>
    </div>
  );
}
