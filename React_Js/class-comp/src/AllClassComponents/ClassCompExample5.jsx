import React from "react";

export default class ClassCompExample5 extends React.Component {
  constructor() {
    super();
    this.textInputRef = React.createRef();
    this.state = {
      name: "",
    };
  }

  handleRef = () => {
    const data = this.textInputRef.current.value;
    alert(data);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Input "
          ref={this.textInputRef}
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.handleRef}>Click me!</button>
      </div>
    );
  }
}
