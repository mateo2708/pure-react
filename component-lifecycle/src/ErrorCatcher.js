import React, { Component } from "react";

export default class ErrorCatcher extends Component {
  state = { error: null };
  componentDidCatch(error, info) {
    console.log("[componentDidCatch]", error);
    this.setState({ error: info.componentStack });
  }

  render() {
    console.log("Render Error Catcher");
    if (this.state.error) {
      return <div>Oye que tienes un error anda: {this.state.error}</div>;
    }
    return this.props.children;
  }
}
