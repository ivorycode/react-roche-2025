import {LevelTwo} from './LevelTwo';

interface LevelOneProps {
  date: Date;
}

export function LevelOne({date}: LevelOneProps) {
  return (
    <div style={{background: '#ffeb99', padding: 50}}>
      <LevelTwo date={date}/>
    </div>
  );
}