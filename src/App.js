import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        <a href="https://github.com/heartless-unicorn/my-app">Open-source</a> by
        Maria Pavlova
      </p>
    </div>
  );
}

export default App;
