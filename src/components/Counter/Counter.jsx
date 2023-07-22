import React, { Component } from "react";
import Controls from "./Controls/Controls";
import Value from "./Value/Value";
import { CounterContainer } from "./Counter.styled";

class Counter extends Component {
  //   state = {
  //     value: 0,
  //   };

  // Початковий стан компонента від props:
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    //   Коли треба просто перезаписати значення стейт:
    //   this.setState({
    //       value: 15,})

    // Коли треба змінити значення стейт, грунтуючись на попередньому актуальному значенні використовуємо функцію:
    //   1 варіант
    //   this.setState((prevState) => {
    //   return { value: prevState.value + 1 };
    // });
    //   2 варіант
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };
  handleDecrement = () => {
    // this.setState((prevState) => {
    //   return { value: prevState.value - 1 };
    // });
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <CounterContainer>
        <Value value={this.state.value} />

        <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
      </CounterContainer>
    );
  }
}

export default Counter;
