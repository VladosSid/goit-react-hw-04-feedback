import PropTypes from 'prop-types';

import { ListBtn, ButtonFeedback } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListBtn>
      {options.map(name => (
        <li key={name}>
          <ButtonFeedback type="button" name={name} onClick={onLeaveFeedback}>
            {name}
          </ButtonFeedback>
        </li>
      ))}
    </ListBtn>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.elementType,
};

export default FeedbackOptions;
