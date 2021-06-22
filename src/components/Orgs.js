import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function Orgs({ name, url, avatar }) {
  const modified_url = useRef("");

  useEffect(() => {
    modified_url.current = url.replace("api.", "");
  }, []);

  return (
    <div>
      <a href={modified_url.current} target="_blank" rel="noreferrer">
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
