const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  // Exercise: 1.9 Conditional rendering

  if (total === 0) return <p>No feedback given.</p>;

  return (
    <div>
      {/* Exercise: 1.8 */}

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive Percentage: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
