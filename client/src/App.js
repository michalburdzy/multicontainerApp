import React, { Component } from "react";
import Notes from "./Notes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Notes app v.30.03.2020</h1>
        <Notes />
      </div>
    );
  }
}

export default App;
