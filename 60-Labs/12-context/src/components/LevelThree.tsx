interface LevelThreeProps {
  date: Date;
}

export function LevelThree({date}: LevelThreeProps) {
  return (
    <div style={{background: '#ffcc99', padding: 50}}>
      <h3>Content</h3>
      <div>{date.toLocaleTimeString()}</div>
    </div>
  );
}