import React, { Component } from "react";
import Room from "./Room";

export default class House extends Component {
  state = {
    rooms: {
      kitchen: true,
      bathroom: true,
      livingRoom: true,
      bedroom: true
    }
  };

  handleSwith = roomName => {
    console.log("handeliando", roomName);
    this.setState((state, props) => {
      return {
        rooms: {
          ...this.state.rooms,
          [roomName]: !this.state[roomName]
        }
      };
    });
  };
  render() {
    return (
      <div>
        <Room
          roomName="kitchen"
          lightStatus={this.state.kitchen}
          handleSwitch={this.handleSwith}
        />
        <Room
          roomName="bathroom"
          lightStatus={this.state.bathroom}
          handleSwitch={this.handleSwith}
        />
        <Room
          roomName="livingRoom"
          lightStatus={this.state.livingRoom}
          handleSwitch={this.handleSwith}
        />
        <Room
          roomName="bedroom"
          lightStatus={this.state.bedroom}
          handleSwitch={this.handleSwith}
        />
      </div>
    );
  }
}
