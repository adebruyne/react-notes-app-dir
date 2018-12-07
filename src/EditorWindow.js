import React from "react";

function EditorWindow(props) {
  return (
    <div>
      <br />
      <textarea
        className="form-control editor-window"
        value="it was the best of times"
        rows="3"
      />
    </div>
  );
}

export default EditorWindow;
