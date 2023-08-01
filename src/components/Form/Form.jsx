import { Component } from "react";
import { nanoid } from "nanoid";

export class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "junior",
    licence: false,
  };

  nameInputId = nanoid(5);
  tagInputId = nanoid(5);

  handleLicenceChange = (evt) => {
    console.log(evt.currentTarget.checked);
    this.setState({ licence: evt.currentTarget.checked });
  };
  handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
    // console.log(evt);
    // console.log(evt.currentTarget);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} />
        Name
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          id={this.nameInputId}
        />
        <label htmlFor={this.tagInputId} />
        Login{" "}
        <input
          type="text"
          name="tag"
          value={this.state.tag}
          onChange={this.handleChange}
          id={this.tagInputId}
        />
        <p>Your level:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === "junior"}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === "middle"}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === "senior"}
          />
          Senior
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          I agree for this agreement
        </label>
        <br />
        <button type="submit" disabled={!this.state.licence}>Submit</button>
      </form>
    );
  }
}
