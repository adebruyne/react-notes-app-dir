import React, { Component } from "react";
import EditorWindow from "./EditorWindow";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";

class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: "note 1",
          content: "pew pew pew"
        },
        {
          title: "note 2",
          content: "lalalala"
        },
        {
          title: "note 3",
          content: "chicka dee dee dee dee dee dee deeeeee"
        }
      ]
    };
  }
  render() {
    return (
      <div className="notes-app container">
        <SearchBar />
        <NoteList notes={this.state.notes.map(note => note.title)} />
        <EditorWindow content={"it was the best of times"} />
      </div>
    );
  }
}

export default NotesApp;
