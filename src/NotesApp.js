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
      <div className="notes-app container">
        <SearchBar />
        <NoteList notes={["note 1", "note 2", "note 3", "note 4"]} />
        <EditorWindow content={"it was the best of times"} />
      </div>
    );
  }
}

export default NotesApp;
