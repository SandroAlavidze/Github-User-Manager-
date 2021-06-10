import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getInfo } from "../api/detinfo";
import { ROUTE_USER } from "../config/routes";

function Card({ avatar, username }) {
  const [detdata, setDetdadta] = useState([]);
  useEffect(() => {
    getInfo(username)
      .then((data) => setDetdadta(data))
      .catch((e) => setError(e.message));
  }, []);
  console.log(detdata);
  return (
    <div>
      <img src={avatar}></img>
      <p>{username}</p>
      <p>{detdata.followers}</p>
      <p>{detdata.following}</p>
      <Link to={{ pathname: `/user/${username}` }}>
        <button>Show More</button>
      </Link>
    </div>
  );
}

export default Card;
