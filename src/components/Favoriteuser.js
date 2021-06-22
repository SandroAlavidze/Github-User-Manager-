import React, { useState, useEffect } from "react";
import { Typography, Button, Box, Card, CardContent } from "@material-ui/core";

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
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5">{user}</Typography>
        </CardContent>
        <Button size="small" color="secondary" onClick={() => setModal(true)}>
          Remove user from favorites
        </Button>
      </Card>
      {showmodal && (
        <Modal>
          <Typography>Remove {user} from favorites?</Typography>
          <Box id="favorite-buttons">
            <Button
              variant="contained"
              color="primary"
              onClick={() => setModal(false)}
            >
              Close
            </Button>
            <Removeuser user={user} />
          </Box>
        </Modal>
      )}
    </Box>
  );
}

Favoriteuser.propTypes = {
  user: PropTypes.string,
};

export default Favoriteuser;
