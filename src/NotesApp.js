import React, { Component } from "react";
import EditorWindow from "./EditorWindow";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";

class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNoteId: 1002,
      notes: [
        {
          id: 1001,
          title: "note 1",
          content: "pew pew pew"
        },
        {
          id: 1002,
          title: "note 2",
          content: "lalalala"
        },
        {
          id: 1003,
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
        <EditorWindow
          content={this._getById(this.state.currentNoteId).content}
        />
      </div>
    );
  }

  _getById = idToFind => {
    //find the object in this.state.notes where id === idToFind
    const theOne = this.state.notes.find(note => {
      return note.id === idToFind;
    });
    return theOne;
  };
}

export default NotesApp;
