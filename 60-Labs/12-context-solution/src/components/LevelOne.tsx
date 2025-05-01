import {LevelTwo} from './LevelTwo';
import { memo } from "react";

export function LevelOne() {
  // console.log('LevelOne rendered')
  return (
    <div style={{background: '#ffeb99', padding: 50}}>
      <LevelTwo/>
    </div>
  );
}

