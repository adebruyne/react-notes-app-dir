import React from "react";

function NoteList(props) {
  return (
    <div>
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
    </div>
  );
}

export default NoteList;
