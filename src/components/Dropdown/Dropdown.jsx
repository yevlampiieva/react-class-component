import { Component } from "react";
import { DropdownContainer, DropdownMenu } from "./Dropdown.styled";
// import css from "./Dropdown.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };
  // show = () => {
  //   this.setState({ visible: true });
  // };
  // hide = () => {
  //   this.setState({ visible: false });
  // };
  render() {
    return (
      <DropdownContainer>
        <button type="button" className="Dropdown__toggle" onClick={this.toggle}>
          {this.state.visible ? "Закрити" : "Показати"}
        </button>

        {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Закрити
        </button> */}
        {this.state.visible && <DropdownMenu>Випадаюче меню</DropdownMenu>}
      </DropdownContainer>
    );
  }
}

export default Dropdown;
