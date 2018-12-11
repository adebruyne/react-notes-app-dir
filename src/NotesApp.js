import React, { Component } from "react";
import EditorWindow from "./EditorWindow";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";

class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: " ",
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
        },
        {
          id: 1004,
          title: "note 4",
          content: "schllama llama"
        },
        {
          id: 1005,
          title: "note 5",
          content: "Leave Brittney alone!!!!"
        }
      ]
    };
  }
  render() {
    return (
      <div className="notes-app container">
        <SearchBar
          searchTerm={this.state.searchTerm}
          handleInput={this._getSearchTerm}
        />
        <NoteList
          notes={this._searchNotes(this.state.searchTerm)}
          handleClick={this._setCurrentNoteId}
        />
        <EditorWindow
          content={this._getById(this.state.currentNoteId).content}
        />
      </div>
    );
  }

  _getSearchTerm = term => {
    console.log(term);
    this.setState({
      searchTerm: term
    });
  };

  _setCurrentNoteId = noteId => {
    console.log("yo you clicked!!!!");
    this.setState({
      currentNoteId: noteId
    });
  };

  _getById = idToFind => {
    //find the object in this.state.notes where id === idToFind
    const theOne = this.state.notes.find(note => {
      return note.id === idToFind;
    });
    return theOne || { content: "" };
    //if theOne, return theOne, else return an object with empty content
  };

  _searchNotes = term => {
    //filter out any notes that do not include the term in either the title or content
    const filteredNotes = this.state.notes.filter(note => {
      const termIsInTitle = note.title.includes(term);
      const termIsInContent = note.content.includes(term);

      return termIsInTitle || termIsInContent;
    });
    return filteredNotes;
  };
}

export default NotesApp;
