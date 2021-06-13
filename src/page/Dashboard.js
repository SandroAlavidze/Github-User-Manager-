import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Loader from "react-loader-spinner";
import { getUsers } from "../api/geninfo";
import Card from "../components/Card";

function Dashboard() {
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagenum, setPagenum] = useState(1);

  useEffect(() => {
    setLoading(true);
    getUsers(pagenum)
      .then((data) =>
        data.map((user) => setUserdata((prev) => [...prev, user]))
      )
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
    // return () => {
    //   setPagenum(1);
    // }
  }, [pagenum]);
  return (
    <div>
      <Header />
      {loading ? (
        <Loader type="Oval" color="#00BFFF" />
      ) : (
        <>
          {userdata.map((user) => (
            <Card key={user.id} username={user.login} />
          ))}
          <button onClick={() => setPagenum(pagenum + 1)}>Load More</button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
