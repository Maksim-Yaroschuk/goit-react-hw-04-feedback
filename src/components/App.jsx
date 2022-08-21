import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (id) => {
    this.setState(() => ({
      [id]: this.state[id] + 1
    }))
  }

  countTotalFeedback = () => {
   const {good, neutral, bad} = this.state
    let total = good + neutral + bad
    console.log(total)
    return total
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    let positiveFeedbackPercentage = good / this.countTotalFeedback() * 100
    return positiveFeedbackPercentage
  }

  render() {
    const {good, neutral, bad} = this.state
    return (
      <div>
      <FeedbackOptions title="Please leave feedback" addFeedback={this.addFeedback} countTotalFeedback={this.countTotalFeedback} countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} />
      <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
        </div>
    );
  }
}

// const SelectedLabel = ({ text }) => {
//   return <h1>{text}</h1>;
// };

// export class App extends Component {
//   state = {
//     selectedStickerLabel: null,
//   };

//   selectStickerLabel = label => {
//     this.setState({
//       selectedStickerLabel: label,
//     });
//   };

//   render() {
//     return (
//       <>
//         <SelectedLabel text={this.state.selectedStickerLabel} />
//         <StickerList stickers={stickers} onSelect={this.selectStickerLabel} />
//         <GlobalStyle />
//       </>
//     );
//   }
// }
