import React, { Component } from "react";

export default class ClassCompExample1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "arma",
    };
  }
  render() {
    return (
      <div>
        <h1>My Name is {this.state.name}</h1>
      </div>
    );
  }
}
