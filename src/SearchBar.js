import React from "react";

function SearchBar(props) {
  return (
    <form>
      <div class="form-group searchbar">
        <input
          type="text"
          class="form-control"
          placeholder="search for something"
        />
      </div>
    </form>
  );
}

export default SearchBar;
