import React from 'react';

class Clicker extends React.Component {
  state = {
    counter: 0,
    autoClickInterval: 2000,
    isAutoClicking: false,
    intervalId: null,
  };

  handleIncrement = () => {
    const { counter } = this.state;

    this.setState({
      counter: counter + 1,
    });
  };

  changeAutoClickInterval = (newInterval) => {
    clearInterval(this.state.intervalId);

    const intervalId = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, newInterval);

    this.setState({
      autoClickInterval: newInterval,
      intervalId: intervalId,
    });
  };

  stopAutoClick = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);

      this.setState({
        isAutoClicking: false,
        intervalId: null,
      });
    }
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { counter, isAutoClicking } = this.state;

    return (
      <article>
        <h2>Click Counter</h2>
        <p>Clicks: {counter}</p>
        <button onClick={this.handleIncrement}>Click</button>
        <button onClick={() => this.changeAutoClickInterval(1000)}>
          1 Second
        </button>
        <button onClick={() => this.changeAutoClickInterval(2000)}>
          2 second
        </button>
        <button onClick={() => this.changeAutoClickInterval(5000)}>
          5 second
        </button>
        <button onClick={() => this.changeAutoClickInterval(10000)}>
          10 second
        </button>
        <button onClick={this.stopAutoClick}>Stop AutoClick</button>
      </article>
    );
  }
}

export default Clicker;
