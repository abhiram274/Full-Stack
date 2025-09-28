import React from "react";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>FS Lab - CO3 React Components</h1>
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;