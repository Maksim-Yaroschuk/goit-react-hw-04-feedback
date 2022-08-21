import { Component } from 'react';
import { Button } from 'components/Button/Button';

export class FeedbackOptions extends Component {
  render() {
    const { title, addFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this.props;
    return (
      <>
        <h2>{title}</h2>
        <Button id="good" type="button" title="Good" addFeedback={addFeedback} countTotalFeedback={countTotalFeedback} countPositiveFeedbackPercentage={countPositiveFeedbackPercentage } />
            <Button id="neutral" type="button" title="Neutral" addFeedback={addFeedback} countTotalFeedback={countTotalFeedback } countPositiveFeedbackPercentage={countPositiveFeedbackPercentage } />
            <Button id="bad" type="button" title="Bad" addFeedback={addFeedback} countTotalFeedback={countTotalFeedback } countPositiveFeedbackPercentage={countPositiveFeedbackPercentage } />
      </>
    );
  }
}
