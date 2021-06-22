import React, { useState } from "react";
import { TextField, Button, Link, Avatar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { useAuth } from "../context/AuthContext";
import { ROUTE_SIGNUP } from "../config/routes";

function LogInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  function handleSignIn(e) {
    e.preventDefault();
    login(username, password);
  }

  return (
    <form id="login-form">
      <Avatar>
        <LockOutlinedIcon color="primary" />
      </Avatar>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="password"
        label="Password"
        value={password}
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        id="signin-button"
        onClick={handleSignIn}
      >
        Sign In
      </Button>
      <Link href={ROUTE_SIGNUP} variant="body2">
        {"Don't have an account? Sign Up"}
      </Link>
    </form>
  );
}

export default LogInForm;
