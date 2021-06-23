import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "react-loader-spinner";
import { Box } from "@material-ui/core";

import { getInfo } from "../api/detinfo";
import Fullinfo from "../components/Fullinfo";
import Header from "../components/Header";

function Info() {
  const login = useParams();
  const [fullinfo, setFullinfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getInfo(login.id)
      .then((data) => setFullinfo(data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <Header />
      {loading ? (
        <Box display="flex" justifyContent="center">
          <Loader type="Oval" color="#00BFFF" />
        </Box>
      ) : (
        <Fullinfo
          username={login.id}
          avatar={fullinfo.avatar_url}
          followers={fullinfo.followers}
          following={fullinfo.following}
          bio={fullinfo.bio}
        />
      )}
    </>
  );
}

export default Info;
