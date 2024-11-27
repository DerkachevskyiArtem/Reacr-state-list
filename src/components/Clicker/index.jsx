import React from 'react';
import styles from './Clicker.module.css'

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
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }

    const intervalId = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, newInterval);

    this.setState({
      autoClickInterval: newInterval,
      intervalId: intervalId,
      isAutoClicking: true,
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
      <article className={styles.container}>
        <h2 className={styles.header}>Click Counter</h2>
        <p className={styles.counter}>Clicks: {counter}</p>
        <p className={styles.statusMessage}>
          {isAutoClicking ? 'AutoClick is enabled' : 'AutoClick is disabled'}
        </p>
        <button className={styles.button} onClick={this.handleIncrement}>
          Click
        </button>
        <div className={styles.buttonGroup}>
          <button
            className={styles.button}
            onClick={() => this.changeAutoClickInterval(1000)}
          >
            1 Second
          </button>
          <button
            className={styles.button}
            onClick={() => this.changeAutoClickInterval(2000)}
          >
            2 second
          </button>
          <button
            className={styles.button}
            onClick={() => this.changeAutoClickInterval(5000)}
          >
            5 second
          </button>
          <button
            className={styles.button}
            onClick={() => this.changeAutoClickInterval(10000)}
          >
            10 second
          </button>
        </div>
        <button className={styles.stopButton} onClick={this.stopAutoClick}>
          Stop AutoClick
        </button>
      </article>
    );
  }
}

export default Clicker;
