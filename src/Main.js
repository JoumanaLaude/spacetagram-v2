import React, { useState, useEffect } from "react";
// import StarButton from "./StarButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const apiKey = process.env.REACT_APP_APOD_KEY;

function Main() {

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

    // console.log(media);
    console.log(faves);


    return (
        <>
            <h1>Spacetagram v2</h1>

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

            <h1>Favorites</h1>
            <ul>
                {faves.map(favorite => {
                    return (
                        <>
                            <img src={favorite.url} alt={favorite.title} />
                            <button
                                type="button"
                                url={favorite.url}
                                onClick={removeFave}
                                >remove item
                            </button>
                        </>
                    );
                })}
            </ul>

        </>
    )
}

export default Main;