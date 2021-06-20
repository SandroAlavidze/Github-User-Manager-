import React from "react";
import Header from "../components/Header";
import LogInForm from "../components/LogInForm";

function Login({ location }) {

  const { state } = location;

  return (
    <div>
      {state?.success && <h3>Sign Up was Successful</h3>}
      <LogInForm />
    </div>
  );
}

export default Login;
