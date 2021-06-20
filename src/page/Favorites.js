import React, { useContext } from "react";
import Favoriteuser from "../components/Favoriteuser";
import Header from "../components/Header";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from 'uuid';

function Favorites() {
  const { favorites } = useContext(AppContext);

  return (
    <>
      <Header />
      <div>
        <h1>Favorites</h1>
        {favorites.map((user) => (
          <Favoriteuser key={uuidv4()} user={user} />
        ))}
      </div>
    </>
  );
}

export default Favorites;
