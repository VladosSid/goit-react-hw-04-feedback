import { useState, useEffect } from 'react';

import StatisticsData from './Statistics';
import FeedbackOptions from './FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const countFeedback = evt => {
    const nameBtn = evt.target.name.toLowerCase();

    switch (nameBtn) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };
  useEffect(() => {
    setTotal(good + bad + neutral);
    setPositivePercentage(Math.round((good / (good + bad + neutral)) * 100));
  }, [good, bad, neutral]);

  return (
    <section
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: '30px',
      }}
    >
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        options={['Good', 'Neutral', 'Bad']}
        onLeaveFeedback={countFeedback}
      />

      <StatisticsData
        statistics="Statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </section>
  );
};

export default App;
