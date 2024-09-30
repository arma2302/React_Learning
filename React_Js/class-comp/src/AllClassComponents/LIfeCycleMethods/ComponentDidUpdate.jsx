import React, { Component } from "react";

export default class ComponentDidUpdate extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidUpdate(prevState) {
    if (this.state.count !== prevState.count) {
      console.log("count has changed ");
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count
        </button>
      </div>
    );
  }
}
