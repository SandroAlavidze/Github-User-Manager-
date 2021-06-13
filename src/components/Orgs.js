import React from "react";
import PropTypes from "prop-types";

function Orgs({ name, url, avatar }) {
  return (
    <div>
      <a href={url} target="_blank">
        <img src={avatar} alt={name} />
      </a>
    </div>
  );
}

Orgs.propTypes = {
  url: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string,
};
Orgs.defaultProps = {
  name: "Organization",
};

export default Orgs;
