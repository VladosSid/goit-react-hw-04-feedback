const StatisticsData = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {total === 0 ? 0 : positivePercentage}%</li>
      </ul>
    </>
  );
};

export default StatisticsData;
