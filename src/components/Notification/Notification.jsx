import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p className="feedbackFont feedbackNotification">{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
