import React, { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_APOD_KEY;

function Main() {

    const [media, setMedia] = useState([]);
    const [faves, setFaves] = useState([]);

    const mediaGet = () => {
        // change to await fetch to check if the fetch resolves successfully
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=2`)
            .then(res => res.json())
            .then(result => {
                setMedia(result)
            })
    }

    const addFave = (fave) => {
        const newFavesList = [...faves, fave];
        setFaves(newFavesList);
    };

    useEffect(() => {
        mediaGet()
    }, [])

    // console.log(media);
    console.log(faves);



    return (
        <>
            <h1>Clever name here</h1>

            {/* move this to Card component */}

            {media.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <h3>{item.date}</h3>
                    <img src={item.url} alt={item.title} />
                    <button onClick={() => addFave(item)} type="button">Add to array</button>
                </div>
            ))}

            <h1>Favorites</h1>
            <ul>
                {faves.map(favorite => {
                    return <img src={favorite.url} alt={favorite.title} />;
                })}
            </ul>
        </>
    )
}

export default Main;