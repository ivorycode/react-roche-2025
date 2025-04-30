import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Greeter } from "./Greter.tsx";

function App() {
  const [count, setCount] = useState(0);

  const myMessage = "Hello World";

  function increase() {
    setCount(count + 2);
  }

  function handleAlert() {
    setCount(count + 100);
  }

  console.log("Rendering App");
  return (
    <>
      <div>
        <Greeter myCount2={count} message={myMessage} onAlert={handleAlert} />
        <Greeter myCount2={count} message={myMessage} onAlert={handleAlert} />
      </div>
      <div className="card">
        <button onClick={increase}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
