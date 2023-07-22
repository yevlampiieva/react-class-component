import { Component } from "react";
import "./ColorPicker.css";

export class ColorPicker extends Component {
  state = {
    activeOptionIdx: 3,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push("ColorPicker__option--active");
    }
    return optionClasses.join(" ");
  };
  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    // console.log(activeOptionLabel.label);

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Your color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

// const ColorPicker = ({ options }) => (
//   <div className="ColorPicker">
//     <h2 className="ColorPicker__title">Color Picker</h2>
//     <div>
//       {options.map(({ label, color }) => (
//         <span key={label} className="ColorPicker__option" style={{ backgroundColor: color }}></span>
//       ))}
//     </div>
//   </div>
// );

export default ColorPicker;
