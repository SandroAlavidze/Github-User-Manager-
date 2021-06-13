import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

function Search() {
  const [input, setInput] = useState("");
  const [toggleclick, setToggle] = useState(false);

  return (
    <div>
      <Header />
      <input
        id="search"
        placeholder="User"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setToggle(true)}>Search</button>
      {toggleclick ? <Card username={input} /> : <></>}
    </div>
  );
}

export default Search;
