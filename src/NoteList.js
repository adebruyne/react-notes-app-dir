import React from "react";

function NoteList(props) {
  return (
    <div>
      <div>
        <ul className="notes-list list-group ">
          <li className="list-group-item">
            <a href="">note 1</a>
          </li>
          <li className="list-group-item">
            <a href="">note 2</a>
          </li>
          <li className="list-group-item">
            <a href="">note 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NoteList;
