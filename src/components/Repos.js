import React from "react";
import PropTypes from "prop-types";

function Repos({ url, name }) {
  return (
    <div>
      <a href={url} target="_blank">
        {name}
      </a>
    </div>
  );
}

Repos.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Repos;
