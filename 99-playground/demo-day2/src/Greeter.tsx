import {useEffect, useState} from 'react';

interface GreeterProps {
  child1: React.ReactNode;
  child2: React.ReactNode;
}

export function Greeter({child1, child2}: GreeterProps) {
  const [firstName, setFirstName] = useState('');
  
  
  
  // console.log('Greeter rendered!')
  return (
    <div>
    <h2 >
      Hello my name is {firstName}. 
    </h2>
      {child1}
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      {child2}
    </div>
  );
}
