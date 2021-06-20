import React from "react";
import Routes from "./Routes";
import { AppContextProvider } from "./context/AppContext";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </AuthContextProvider>
  );
}
export default App;
