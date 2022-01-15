import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import StarButton from "../StarButton";
import styled from "styled-components";
import ModalImage from "react-modal-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Top from "./Top";

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function Explore() {

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
        );
        if (isAlreadyStarred.length > 0) {
            return;
        }
        const newFavesList = [...faves, fave];
        setFaves(newFavesList);
        // saveToLocalStorage(newFavesList);
    };

    const removeFave = (e) => {
        const url = e.target.getAttribute("url")
        setFaves(faves.filter(favorite => favorite.url !== url));
    };

    // const saveToLocalStorage = (fave) => {
    //     localStorage.setItem("starred", JSON.stringify(fave));
    // };

    // useEffect(() => {
    //     const storedStars = JSON.parse(localStorage.getItem("fave"));

    //     if (Array.isArray(storedStars)) {
    //         setFaves(storedStars);
    //     }
    // }, []);

    // if (!media) return <Loading />;

    // useEffect(() => {
    //     mediaGet()
    // }, [])

    console.log(faves);

    return (
        <>
        <Navigation />
            <section>
                <Box>
                    <h1>Explore</h1>
                    <p>Click the button to search through time and see what you will find.</p>
                    <button
                        onClick={() => window.location.reload(false)}
                        type="button">
                        <FontAwesomeIcon icon={faStar} className="fa-fw" /> Explore the Universe<FontAwesomeIcon icon={faStar} className="fa-fw" />
                    </button><hr />
                    <Grid>
                        {media.map((item, index) => (
                            <Card key={index}>
                                {item.media_type === "image" ? (
                                    <ModalImage
                                        small={item.url}
                                        large={item.hdurl}
                                        hideDownload={true}
                                        showRotate={true}
                                        alt={item.title}
                                    />
                                ) : (
                                    <iframe
                                        title="NASA video"
                                        src={item.url}
                                        frameBorder="0"
                                        allow="encrypted-media"
                                        className="video"
                                    />
                                )}
                                <h3>{item.date}</h3>
                                <h2>{item.title}</h2>
                                <span
                                    onClick={() => addFave(item)}>
                                    <StarButton />
                                </span>
                            </Card>
                        ))}
                    </Grid>
                </Box>
            </section>

            <section id="starred">
                <Box>
                    <h1>My Stars</h1><hr />
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
                                >Remove Star
                                </button>
                            </Card>
                        ))}
                    </Grid>
                </Box>
                <Top />
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
