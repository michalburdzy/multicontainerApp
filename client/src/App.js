import React, { Component } from "react";
import Notes from "./Notes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Notes app</h1>
        <h2>v.02.04.2020</h2>
        <Notes />
      </div>
    );
  }
}

export default App;
