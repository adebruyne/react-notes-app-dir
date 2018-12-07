import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="notes-app">
          <div className="searchbar">
            <input
              value="it"
              type="text
        "
            />
          </div>
          <div className="notes-list">
            <ul>
              <li>
                <a href="">note 1</a>
              </li>
              <li>
                <a href="">note 2</a>
              </li>
              <li>
                <a href="">note 3</a>
              </li>
            </ul>
          </div>
          <div className="editor-window">"This is a note"</div>
        </div>
      </div>
    );
  }
}

export default App;
