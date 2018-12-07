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
                <a
                  onClick={() => {
                    props.handleClick(note.id);
                  }}
                >
                  {note.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NoteList;
