import React, { Component } from "react";

export class Sample extends Component {
  render() {
    return <h1>Hello world sample example</h1>;
  }
}

export default class ClassCompExample3 extends Component {
  render() {
    return (
      <div>
        <Sample />
      </div>
    );
  }
}
