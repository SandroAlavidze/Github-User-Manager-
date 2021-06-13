import React, { useEffect, useState } from "react";
import { getInfo } from "../api/detinfo";
import Showmore from "./Showmore";
import PropTypes from "prop-types";

function Card({ username }) {
  const [detaileddata, setDetdadta] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getInfo(username)
      .then((data) => setDetdadta(data))
      .catch((e) => setError(e.message));
  }, []);

  return (
    <div id="card">
      {error && <h1>{error}</h1>}
      <img src={detaileddata.avatar_url} alt="avatar" />
      <p>{username}</p>
      <p>{detaileddata.followers}</p>
      <p>{detaileddata.following}</p>
      <Showmore username={username} />
    </div>
  );
}

Card.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Card;
