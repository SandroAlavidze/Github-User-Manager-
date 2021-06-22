import React from "react";
import Routes from "./Routes";
import { FavoritesContext } from "./context/AppContext";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <FavoritesContext>
        <Routes />
      </FavoritesContext>
    </AuthContextProvider>
  );
}
export default App;
