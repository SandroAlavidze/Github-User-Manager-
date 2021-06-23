import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getInfo } from "../api/detinfo";
import Fullinfo from "../components/Fullinfo";
import Header from "../components/Header";

function Info() {
  const login = useParams();
  const [fullinfo, setFullinfo] = useState([]);

  useEffect(() => {
    getInfo(login.id).then((data) => setFullinfo(data));
  }, []);
  return (
    <>
      <Header />
      <Fullinfo
        username={login.id}
        avatar={fullinfo.avatar_url}
        followers={fullinfo.followers}
        following={fullinfo.following}
        bio={fullinfo.bio}
      />
    </>
  );
}

export default Info;
