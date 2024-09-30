import React, { Component } from "react";

export default class ClassComponentExample4 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      msg: "this is the normal msg",
    };
  }

  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <h2>{this.state.msg}</h2>
        <button onClick={this.handleCount}>Increase Count</button>
      </div>
    );
  }
}
