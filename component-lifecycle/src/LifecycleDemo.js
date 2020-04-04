import React, { Component } from "react";

export default class LifecycleDemo extends Component {
  state = { counter: 0 };
  constructor(props) {
    super(props);
    console.log("[constructor]");
    console.log("   State already set: ", this.state);
  }

  componentDidMount() {
    console.log("[componentDidMount]", "Mounted");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[getDerivedStateFromProps]");
    console.log("   Next Props: ", nextProps);
    console.log("   Prev State: ", prevState);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[shouldComponentUpdate]", "Deciding to update");
    return true;
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log("[getSnapshotBeforeUpdate]", "About to update");
    return `Time is ${Date.now()}`;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[componentDidUpdate]", "Updated");
    console.log(" snapshot: ", snapshot);
  }

  componentWillUnmount() {
    console.log("[componentWillUnmount]", "Adios mundo cruel");
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  causeErrorNextRender = () => {
    this.setState({
      causeError: true
    });
  };
  render() {
    console.log("[render]");
    if (this.state.causeError) {
      throw new Error("Jesú! Un error ha sucedido!!!");
    }
    return (
      <div>
        <span>Counter: {this.state.counter}</span>
        <button onClick={this.handleClick}>Click to crecerlo</button>
        <button onClick={this.causeErrorNextRender}>Tirate un error</button>
      </div>
    );
  }
}
