import React from "react";
import ErrorCatcher from "./ErrorCatcher";
import LifecycleDemo from "./LifecycleDemo";

function App() {
  return (
    <ErrorCatcher>
      <LifecycleDemo />
    </ErrorCatcher>
  );
}

export default App;
