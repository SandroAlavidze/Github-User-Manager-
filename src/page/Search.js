import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

function Search() {
  const [searchkeyword, setKeyword] = useState("");
  const [input, setInput] = useState("");
  const [clicked, setClicked] = useState(false);
  // console.log(searchkeyword);

  return (
    <div>
      <Header />
      <input
        id="search"
        placeholder="User"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          setKeyword(input), setClicked(!clicked);
        }}
      >
        Search
      </button>
      {clicked && <Card username={searchkeyword} />}
    </div>
  );
}

export default Search;
