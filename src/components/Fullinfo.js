import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getInfo } from "../api/detinfo";
import Repos from "./Repos";
import Orgs from "./Orgs";

function Fullinfo({ username, avatar, followers, following, bio }) {
  const [orgs, setOrgs] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getInfo(username, "repos").then((data) => setRepos(data));

    getInfo(username, "orgs").then((data) => setOrgs(data));
  }, []);
  console.log(repos);
  return (
    <div id="full-info">
      <img src={avatar} alt="avatar" />
      <p>{username}</p>
      <p>{followers}</p>
      <p>{following}</p>
      {bio && <p>{bio}</p>}
      {orgs.slice(0, 3).map((org) => (
        <Orgs
          key={org.id}
          name={org.login}
          url={org.url}
          avatar={org.avatar_url}
        />
      ))}
      {repos.slice(0, 10).map((repo) => (
        <Repos key={repo.id} url={repo.html_url} name={repo.name} />
      ))}
      <button>Favorites</button>
    </div>
  );
}

Fullinfo.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  bio: PropTypes.string,
};

export default Fullinfo;
