// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import StatisticsData from './StatisticsData';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGod = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  countNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  countBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
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
      <section>
        <h1>Please leave feedback</h1>

        <button type="button" name="good" onClick={this.countGod}>
          Good
        </button>
        <button type="button" onClick={this.countNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.countBad}>
          Bad
        </button>

        <div>
          <h2>Statistics</h2>
          <StatisticsData
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </div>
      </section>
    );
  }
}

export default Feedback;
