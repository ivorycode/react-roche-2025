import { useState } from "react";

interface GreeterProps {
  myCount2: number;
  message: string;
  onAlert: () => void;
}
export function Greeter(props: GreeterProps) {
  const [state, setState] = useState({
    firstName: "John",
    lastName: "Doe",
  });

  console.log("Rendering Greeter", props.myCount2);

  function changeFirstName(newFirstName: string) {
    setState({ ...state, firstName: newFirstName });
  }
  function changeLastName(e: React.ChangeEvent<HTMLInputElement>) {
    setState({ ...state, lastName: e.target.value });
  }

  function tirggerAlert() {
    props.onAlert();
  }

  return (
    <>
      <h1>Count is {props.myCount2}</h1>
      <h1>
        Hello, my name is {state.firstName} {state.lastName}
      </h1>
      <button onClick={tirggerAlert}>Alert!!!!</button>
      <input
        type="text"
        value={state.firstName}
        onChange={(e) => changeFirstName(e.target.value)}
      />
      <br />
      <input type="text" value={state.lastName} onChange={changeLastName} />
    </>
  );
}
