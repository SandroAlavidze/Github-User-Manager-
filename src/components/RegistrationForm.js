import React, { useState } from "react";
import {
  TextField,
  Button,
  Avatar,
  Container,
  Box,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { AlertTitle } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { signUpUser } from "../api/auth";
import { ROUTE_MAIN } from "../config/routes";

function RegistrationForm() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
  });
  const [error, setError] = useState([]);
  const history = useHistory();

  function handleSignUp(e) {
    e.preventDefault();
    signUpUser(user)
      .then(() => history.push(ROUTE_MAIN, { success: true }))
      .catch((e) => setError(e.response.data.message));
  }

  return (
    <Container maxWidth="sm">
      {error.length !== 0 && (
        <Box>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error.map((error) => (
              <Typography key={uuidv4()}>{error}</Typography>
            ))}
          </Alert>
        </Box>
      )}
      <Box
        marginTop="4em"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Avatar margin="normal">
          <LockOutlinedIcon color="secondary" />
        </Avatar>
        <form id="signup-form">
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Username"
            required
            value={user.username}
            type="text"
            id="username"
            name="username"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            required
            label="Password"
            value={user.password}
            type="password"
            id="password"
            name="password"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            value={user.firstName}
            label="First Name"
            required
            type="text"
            id="firstName"
            name="firstName"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            required
            label="Last Name"
            value={user.lastName}
            type="text"
            id="lastName"
            name="lastName"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            required
            label="Email"
            value={user.email}
            type="email"
            id="email"
            name="email"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
          <TextField
            margin="normal"
            fullWidth
            required
            label="Date of Birth"
            value={user.birthDate}
            type="date"
            id="birthDate"
            name="birthDate"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default RegistrationForm;
