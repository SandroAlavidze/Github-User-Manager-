import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import PropTypes from "prop-types";
import Removeuser from "./Removeuser";

function Favoriteuser({ user }) {
  const [showmodal, setModal] = useState(false);

  useEffect(() => {
    return () => {
      setModal(false);
    };
  }, []);

  return (
    <>
      <button onClick={() => setModal(true)}>{user}</button>
      {showmodal && (
        <Modal>
          <p>Remove {user}?</p>
          <button onClick={() => setModal(false)}>Close</button>
          <Removeuser user={user} setModal={setModal} />
        </Modal>
      )}
    </>
  );
}

Favoriteuser.propTypes = {
  user: PropTypes.string,
};

export default Favoriteuser;
