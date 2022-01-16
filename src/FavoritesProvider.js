import React, { useState, useEffect, createContext } from 'react';

const FavoritesContext = createContext();

const apiKey = process.env.REACT_APP_APOD_KEY;

const FavoritesProvider = ({ children }) => {
    const [media, setMedia] = useState([]);
    const [faves, setFaves] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const opts = { signal: abortController.signal };

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=15`, opts)
            .then((response) => response.json())
            .then((data) => setMedia(data))
            .catch((error) => console.log(error.message));
        return () => abortController.abort();
    }, []);

    const addFave = (fave) => {
        const isAlreadyStarred = faves.filter(
            item => item === fave
        )
        
        if (isAlreadyStarred.length > 0) {
            return;
        }
        const newFavesList = [...faves, fave];
        setFaves(newFavesList);
    };

    const removeFave = (e) => {
        const url = e.target.getAttribute("url")
        setFaves(faves.filter(favorite => favorite.url !== url));
    };

    return (
        <FavoritesContext.Provider value={{ media, faves, addFave, removeFave }}>
            {children}
        </FavoritesContext.Provider>
    )
};

export default FavoritesProvider;