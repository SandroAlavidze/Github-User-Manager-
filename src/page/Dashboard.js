import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Button, Box } from "@material-ui/core";

import Header from "../components/Header";
import { getUsers } from "../api/geninfo";
import Card from "../components/Card";

function Dashboard() {
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagenum, setPagenum] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getUsers(pagenum)
      .then((data) =>
        data.map((user) => setUserdata((prev) => [...prev, user]))
      )
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [pagenum]);
  return (
    <Box id="dashboard">
      <Header />
      {error && <h2>{error}</h2>}
      {loading ? (
        <Loader type="Oval" color="#00BFFF" />
      ) : (
        <>
          <Box id="cards">
            {userdata.map((user) => (
              <Card key={user.id} username={user.login} />
            ))}
          </Box>
          <Button
            variant="contained"
            color="primary"
            id="load-more"
            onClick={() => setPagenum(pagenum + 1)}
          >
            Load More
          </Button>
        </>
      )}
    </Box>
  );
}

export default Dashboard;
