import React from "react";
import { useParams } from "react-router";

function Info() {
  const login = useParams();
  return <div>User:{login.id}</div>;
}

export default Info;
