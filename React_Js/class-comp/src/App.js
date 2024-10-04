import React, { Component } from "react";
import ClassCompExample1 from "./AllClassComponents/ClassCompExample1";
import ClassCompExample2 from "./AllClassComponents/ClassCompExample2";
import ClassCompExample3 from "./AllClassComponents/ClassCompExample3";
import ClassComponentExample4 from "./AllClassComponents/ClassComponentExample4";
import ComponentDidMount from "./AllClassComponents/LIfeCycleMethods/ComponentDidMount";
import ComponentDidUpdate from "./AllClassComponents/LIfeCycleMethods/ComponentDidUpdate";
import ComponentWillUnMount from "./AllClassComponents/LIfeCycleMethods/ComponentWillUnMount";
import ClassCompExample5 from "./AllClassComponents/ClassCompExample5";

export default class App extends Component {
  render() {
    return (
      <div>
        <ClassCompExample1 />
        <ClassCompExample2 />
        <ClassCompExample3 />
        <ClassComponentExample4 />
        <ComponentDidMount />
        <ComponentDidUpdate />
        <ComponentWillUnMount />
        <ClassCompExample5 />
      </div>
    );
  }
}
