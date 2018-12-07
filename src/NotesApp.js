import React, { Component } from "react";
import EditorWindow from "./EditorWindow";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";

class NotesApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="notes-app">
        <SearchBar />
        <NoteList />
        <EditorWindow />
      </div>
    );
  }
}

export default NotesApp;
