import {useEffect, useState} from 'react'
import './App.css'
import {Greeter} from './Greeter.tsx';

function App() {
  const [count, setCount] = useState(0)
  
  const showGreeter = count % 2 === 0;
  // const showGreeter = true;

  function increase() {
    setCount(count + 1) 
  }
  
  const frag1 = <h1>I am Fragment 1</h1>
  const frag2 = <h2>I am Fragment 2</h2>

  // console.log('App rendered!')
  return (
    <div>
      <h1>Demo: {count}</h1>
      <button onClick={increase}>Increase</button>
      <Greeter child1={frag1} child2={frag2}/>
    </div>
  )
}

export default App
