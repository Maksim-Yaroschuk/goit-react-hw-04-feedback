import { Component } from 'react';

export class Button extends Component {
  render() {
    const { id, title, type, addFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this.props;
    return (
      <button id={id} type={type} onClick={() => {
        addFeedback(id);
        countPositiveFeedbackPercentage();
      }}>
        {title}
      </button>
    );
  }
}
