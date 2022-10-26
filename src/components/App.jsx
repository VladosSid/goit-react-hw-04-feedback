// import PropTypes from 'prop-types';
import { Component } from 'react';

import StatisticsData from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = evt => {
    const nameBtn = evt.target.name.toLowerCase();

    this.setState(prevState => {
      return {
        [nameBtn]: prevState[nameBtn] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const total = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return total;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

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
          onLeaveFeedback={this.countFeedback}
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
  }
}

export default App;
