import StatisticLine from './StatisticLine';

const NewStatistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  // Exercise: 1.9 Conditional rendering

  if (total === 0) return <p>No feedback given.</p>;

  return (
    <div>
      {/* Exercise: 1.10 */}
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={total} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine
        text="Positive Percentage"
        value={`${positivePercentage}%`}
      />
    </div>
  );
};

export default NewStatistics;
