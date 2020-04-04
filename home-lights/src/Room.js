import React from "react";

const Room = ({ roomName, lightStatus, handleSwitch }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: lightStatus ? "yellow" : "black",
          width: "40px",
          height: "1rem"
        }}
      ></div>
      <button onClick={() => handleSwitch(roomName)}>Switch it!</button>
    </div>
  );
};

export default Room;
