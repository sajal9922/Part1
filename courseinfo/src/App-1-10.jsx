import React, { useState } from 'react';
import Button from './components/Feedback/Button';
import Statistics from './components/Feedback/NewStatistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      {/* Exercise: 1.6 to 1.10 Button with click event */}
      <h2>Give Feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h2>Statistics</h2>
      {/* exercise: 1.8 new Statistics component */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
