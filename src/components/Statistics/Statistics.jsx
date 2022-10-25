import Notification from './../Notification';
const StatisticsData = ({
  statistics,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total !== 0 ? (
        <>
          <h2>{statistics}</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {total === 0 ? 0 : positivePercentage}%</li>
          </ul>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default StatisticsData;
