import React from "react";

function SearchBar(props) {
  return (
    <form>
      <div class="form-group searchbar">
        <input
          type="text"
          value={props.searchTerm}
          class="form-control"
          placeholder="search for something"
          onChange={event => {
            // console.log(event.target.value);
            props.handleInput(event.target.value);
          }}
        />
      </div>
    </form>
  );
}

export default SearchBar;
