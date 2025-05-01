import {LevelThree} from './LevelThree';

interface LevelTwoProps {
  date: Date;
}

export function LevelTwo({date}: LevelTwoProps) {
  // console.log('render LevelTwo');
  return (
    <div style={{background: 'gold', padding: 50}}>
      <LevelThree date={date}/>
    </div>
  );
}