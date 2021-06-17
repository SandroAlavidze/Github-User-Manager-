import React, { useContext } from 'react';
import Favoriteuser from '../components/Favoriteuser';
import Header from '../components/Header';
import { AppContext } from '../context/AppContext'

function Favorites() {
    const { favorites } = useContext(AppContext)

    return (
        <>
            <Header />
            <div>
                <h1>Favorites</h1>
                {favorites.map((user) => <Favoriteuser user={user} />)}
            </div>
        </>
    )
}

export default Favorites
