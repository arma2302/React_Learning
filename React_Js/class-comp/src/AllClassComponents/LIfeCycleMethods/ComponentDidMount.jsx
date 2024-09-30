import React, { Component } from "react";

export default class ComponentDidMount extends Component {
  constructor() {
    super();
    this.state = {
      msg: "",
    };
  }

  componentDidMount() {
    this.setState({ msg: "Hello, comoponent did mount" });
  }
  render() {
    return (
      <div>
        {/* componentDidMount This method is called once the component has been
        rendered to the DOM. It’s commonly used for fetching data or setting up
        subscriptions. */}
        <h1>{this.state.msg}</h1>
      </div>
    );
  }
}
