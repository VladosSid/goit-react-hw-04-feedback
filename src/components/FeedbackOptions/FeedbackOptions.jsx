// import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(name => (
        <li key={name}>
          <button type="button" name={name} onClick={onLeaveFeedback}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
