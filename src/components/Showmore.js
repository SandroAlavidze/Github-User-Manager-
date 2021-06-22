import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
function Showmore({ username }) {
  return (
    <Link to={{ pathname: `/user/${username}` }}>
      <Button size="small" variant="contained" color="primary">
        Show More
      </Button>
    </Link>
  );
}

Showmore.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Showmore;
