import React from 'react';

class Clicker extends React.Component {
  state = {
    counter: 0,
    autoClickInterval: 2000,
    isAutoClicking: false,
    intervalId: null,
  };

  startAutoClick = () => {
    if(this.state.isAutoClicking) return
  }

  handleIncrement = () => {
    const { counter } = this.state;

    this.setState({
      counter: counter + 1,
    });
  };

  render() {
    return (
      <article>
        <h2>Click Counter</h2>
        <p>{this.state.counter}</p>
        <button onClick={this.handleIncrement}>Click me</button>
      </article>
    );
  }
}

export default Clicker;
