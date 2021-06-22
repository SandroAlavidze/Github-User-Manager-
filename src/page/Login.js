import React from "react";
import PropTypes from "prop-types";
import Alert from "@material-ui/lab/Alert";
import { AlertTitle } from "@material-ui/lab";
import { Box } from "@material-ui/core";

import LogInForm from "../components/LogInForm";

function Login({ location }) {
  const { state } = location;

  return (
    <Box id="login" display="flex" flexDirection="column" alignItems="center">
      {state?.success && (
        <Box width={0.4}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>You have successfully signed up
          </Alert>
        </Box>
      )}
      <LogInForm />
    </Box>
  );
}

Login.propTypes = {
  location: PropTypes.object,
};

export default Login;
