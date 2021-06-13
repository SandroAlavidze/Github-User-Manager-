import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Showmore({ username }) {
  return (
    <Link to={{ pathname: `/user/${username}` }}>
      <button>Show More</button>
    </Link>
  );
}

Showmore.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Showmore;
