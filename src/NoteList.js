import React from "react";

function NoteList(props) {
  console.log(props);
  return (
    <div>
      <div>
        <ul className="notes-list list-group ">
          {props.notes.map(note => {
            return (
              <li className="list-group-item">
                <a href="">{note}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NoteList;
