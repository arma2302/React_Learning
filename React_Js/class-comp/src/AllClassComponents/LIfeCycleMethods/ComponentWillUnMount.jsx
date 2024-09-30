import React, { Component } from "react";

export default class ComponentWillUnMount extends Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("inteval ");
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("interval cleared");
  }
  render() {
    return <div></div>;
  }
}
