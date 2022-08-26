import { Component } from 'react';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <h2 className='title'>{title}</h2>
        {children}
      </>
    );
  }
}