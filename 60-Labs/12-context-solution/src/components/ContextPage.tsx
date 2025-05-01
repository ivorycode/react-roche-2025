import {createContext, useEffect, useState} from 'react';
import { DateContext } from './DateContext';
import {LevelOne} from './LevelOne';

export function ContextPage() {
  const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   setInterval(() => {
  //     setDate(new Date());
  //   }, 1000);
  // }, []);
  function update(){
    setDate(new Date());
  }

  console.log('Page rendered')
  return (
    <div style={{background: '#fff5cc', padding: 50}}>
      <h3 style={{margin: 0}}>Page</h3>
      <div>(state is here)</div>

      <DateContext.Provider value={{date, update}}>
        <LevelOne/>
      </DateContext.Provider>
    </div>
  );
}