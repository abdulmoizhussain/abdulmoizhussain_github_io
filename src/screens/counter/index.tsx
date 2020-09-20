import React from 'react';
import './style.css';
import { EventData, Swipeable } from 'react-swipeable';
import { LocalStorageKey } from '../../common/constants';

const ArrowKeyNames = {
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown",
  ArrowLeft: "ArrowLeft",
};

export default class RenderMarkdown extends React.Component {
  swipeRequiredDistance = 60;
  state = {
    counter: 0
  };

  componentDidMount() {
    this.setState({ counter: Number(localStorage.getItem(LocalStorageKey.COUNTER)) });
    window.addEventListener("beforeunload", this.onBeforeUnload);
    window.addEventListener("keyup", this.onKeyUpListener);
  }
  componentWillUnmount() {
    this.saveCurrentCounter();
    window.removeEventListener("beforeunload", this.onBeforeUnload);
    window.removeEventListener("keyup", this.onKeyUpListener);
  }

  onBeforeUnload = () => {
    this.saveCurrentCounter();
  };

  saveCurrentCounter = () => {
    localStorage.setItem(LocalStorageKey.COUNTER, this.state.counter.toString());
  };

  onKeyUpListener = (ev: KeyboardEvent) => {
    const keyName = ev.key;
    if (keyName === ArrowKeyNames.ArrowUp || keyName === ArrowKeyNames.ArrowRight) {
      this.incrementCounter();
    }
    else if (keyName === ArrowKeyNames.ArrowLeft || keyName === ArrowKeyNames.ArrowDown) {
      this.decrementCounter();
    }
  };

  onDecrement = (eventData: EventData) => {
    const [deltaX, deltaY] = [Math.abs(eventData.deltaX), Math.abs(eventData.deltaY)];
    if (deltaX > this.swipeRequiredDistance || deltaY > this.swipeRequiredDistance) {
      this.decrementCounter();
    }
  };
  decrementCounter = () => { this.setState({ counter: this.state.counter - 1 }); };

  onIncrement = (eventData: EventData) => {
    const [deltaX, deltaY] = [Math.abs(eventData.deltaX), Math.abs(eventData.deltaY)];
    if (deltaX > this.swipeRequiredDistance || deltaY > this.swipeRequiredDistance) {
      this.incrementCounter();
    }
  };
  incrementCounter = () => { this.setState({ counter: this.state.counter + 1 }); };

  onResetCounter = () => {
    if (window.confirm("Are you sure you want to reset counter to zero?")) {
      this.setState({ counter: 0 });
    }
  };

  render() {
    return (
      <div>
        <Swipeable className="swipe-container"
          onSwipedUp={this.onIncrement}
          onSwipedRight={this.onIncrement}
          onSwipedDown={this.onDecrement}
          onSwipedLeft={this.onDecrement}
        >
          <button onClick={this.onResetCounter}>Reset</button>
          <h1 className="mt-40">{this.state.counter}</h1>
        </Swipeable>
      </div>
    );
  }
}