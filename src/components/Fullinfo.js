import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

import { getInfo } from "../api/detinfo";
import Repos from "./Repos";
import Orgs from "./Orgs";
import Addfavorites from "./Addfavorites";
import { AppContext } from "../context/AppContext";
import Removeuser from "./Removeuser";

function Fullinfo({ username, avatar, followers, following, bio }) {
  const { favorites } = useContext(AppContext);
  const [orgs, setOrgs] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getInfo(username, "repos").then((data) => setRepos(data));

    getInfo(username, "orgs").then((data) => setOrgs(data));
  }, []);

  return (
    <Box id="full-info-page">
      <Box id="full-info">
        <Box id="general-profile">
          <Box>
            <img src={avatar} alt="avatar" />
            <Typography variant="h4">
              <b>{username}</b>
            </Typography>
            <Box id="favorites-buttons" marginTop="1.2em">
              {favorites.includes(username) ? (
                <Removeuser user={username} />
              ) : (
                <Addfavorites user={username} avatar={avatar} />
              )}
            </Box>
            <Box>
              <Typography variant="subtitle1">Followers: </Typography>
              <Typography variant="subtitle2">{followers}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">Following: </Typography>
              <Typography variant="subtitle2">{following}</Typography>
            </Box>
            {bio && <Typography>{bio}</Typography>}
            <Box
              id="organizations"
              marginTop="1.2em"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {orgs.slice(0, 3).map((org) => (
                <Orgs
                  key={org.id}
                  name={org.login}
                  url={org.url}
                  avatar={org.avatar_url}
                />
              ))}
            </Box>
          </Box>
          <Box id="repos" maxHeight="100%">
            {repos.slice(0, 10).map((repo) => (
              <Repos
                key={repo.id}
                url={repo.html_url}
                name={repo.name}
                description={repo.description}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

Fullinfo.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number,
  bio: PropTypes.string,
};

export default Fullinfo;
