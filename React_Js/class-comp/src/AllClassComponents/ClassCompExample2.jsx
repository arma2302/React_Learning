import React from "react";
import { Component } from "react";
export default class ClassCompExample2 extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      name: "arma",
      color: "red",
    };
  }

  handleClick = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      color: "blue",
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>
          {this.state.isVisible ? this.state.name : "Error"}
        </h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
