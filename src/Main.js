import React, { useState, useEffect } from "react";
// import StarButton from "./StarButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function Main() {

    const [media, setMedia] = useState([]);
    const [faves, setFaves] = useState([]);
    // const [star, setStar] = useState(false);

    const mediaGet = () => {
        // change to await fetch to check if the fetch resolves successfully
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`)
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

    // const handleToggle = () => {
    //     setStar((star) => {
    //         return !star;
    //     });
    // };

    // if (!media) return <Loading />;

    useEffect(() => {
        mediaGet()
    }, [])

    console.log(faves);

    return (
        <>
            <section>
                <Box>
                    <h2>Search through time:</h2>
                    <button onClick={() => window.location.reload(false)} type="button">Randomize!</button>
                    <Grid>
                        {media.map((item, index) => (
                            <div key={index}>
                                <h2>{item.title}</h2>
                                <h3>{item.date}</h3>
                                <img src={item.url} alt={item.title} />
                                <button
                                    onClick={() => addFave(item)}
                                    type="button">
                                    add {" "}
                                    <FontAwesomeIcon icon={faStar} className="fa-1x fa-fw star-toggle" />
                                </button>
                            </div>
                        ))}

                    </Grid>
                </Box>
            </section>

            <section>
                <Box>
                    <h1>Favorites</h1>
                    <Grid>
                        {faves.map((favorite, faved) => (
                            <div key={faved}>
                                <img src={favorite.url} alt={favorite.title} />
                                <button
                                    type="button"
                                    url={favorite.url}
                                    onClick={removeFave}
                                >remove item
                                </button>
                            </div>
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