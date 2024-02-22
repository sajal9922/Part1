import React, { useState } from 'react';
import Button from './components/Feedback/Button';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //  For exercise: 1.7

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      {/* Exercise: 1.6 to 1.10 Button with click event */}
      <h2>Give Feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      {/* Exercise:1.6  display basic statistics*/}

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      {/* exercises:1.7  displaying Total, Average and Positive percetage*/}

      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive Percentage: {positivePercentage}%</p>

      {/* <Statistics good={good} neutral={neutral} bad={bad} /> */}
    </div>
  );
};

export default App;
