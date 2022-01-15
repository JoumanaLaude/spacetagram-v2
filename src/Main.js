import React, { useState, useEffect } from "react";
import StarButton from "./StarButton";
import styled from "styled-components";

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function Main() {

    const [media, setMedia] = useState([]);
    const [faves, setFaves] = useState([]);

    const mediaGet = () => {
        // change to await fetch to check if the fetch resolves successfully
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=12`)
            .then(res => res.json())
            .then(result => {
                setMedia(result)
            })
    }

    const addFave = (fave) => {
        const isAlreadyStarred = faves.filter(
            item => item === fave
        );
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

    // if (!media) return <Loading />;

    useEffect(() => {
        mediaGet()
    }, [])

    console.log(faves);

    return (
        <>
            <section>
                <Box>
                    <p>Click the button to search through time!</p>
                    <button onClick={() => window.location.reload(false)} type="button">Explore</button>
                    <Grid>
                        {media.map((item, index) => (
                            <Card key={index}>
                                <img src={item.url} alt={item.title} />
                                <h3>{item.date}</h3>
                                <h2>{item.title}</h2>
                                <button
                                    onClick={() => addFave(item)}
                                    type="button">
                                    <StarButton />
                                </button>
                            </Card>
                        ))}

                    </Grid>
                </Box>
            </section>

            <section>
                <Box>
                    <h1>Starred</h1>
                    <Grid>
                        {faves.map((favorite, faved) => (
                            <Card key={faved}>
                                <img src={favorite.url} alt={favorite.title} />
                                <h3>{favorite.date}</h3>
                                <h2>{favorite.title}</h2>
                                <button
                                    type="button"
                                    url={favorite.url}
                                    onClick={removeFave}
                                >remove item
                                </button>
                            </Card>
                        ))}
                    </Grid>
                </Box>
            </section>
        </>
    )
}

const Grid = styled.div`
    display: grid;
    grid-row: 2 / auto;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
    padding: 4rem;
    
    @media only screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }

    @media only screen and (min-width: 1500px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const Box = styled.div`
    width: 80%;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 3rem;
    
    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`;

const Card = styled.div`
    box-shadow: 10px 10px 5px rgba(60,79,118, 0.3);
    border-radius: 5px;
    background-color: #EFE6FF;
    color: #222;
    width: fit-content;
    height: fit-content;
`
