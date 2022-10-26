import PropTypes from 'prop-types';
import Notification from './../Notification';

import { ListFeedbackValue } from './Statistics.styled';

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
          <ListFeedbackValue>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {total === 0 ? 0 : positivePercentage}%</li>
          </ListFeedbackValue>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

StatisticsData.propTypes = {
  statistics: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default StatisticsData;
