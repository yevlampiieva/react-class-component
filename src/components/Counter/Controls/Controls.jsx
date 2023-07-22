import React from "react";
import { CounterControls } from "./Controls.styled";

const Controls = ({ onIncrement, onDecrement }) => (
  <CounterControls>
    <button type="button" onClick={onIncrement}>
      Збільшити на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Зменшити на 1
    </button>
  </CounterControls>
);

export default Controls;
