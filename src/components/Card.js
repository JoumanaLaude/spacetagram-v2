import React,
{
    // useState, 
    // useContext
} from "react";
import StarButton from "./StarButton";
import styled from "styled-components";
import ModalImage from "react-modal-image";
// import FavoritesContext from "../FavoritesProvider";

export default function Card({ url, hdurl, title, date, media_type }) {
    // const { addFave } = useContext(FavoritesContext);

    // const [faves, setFaves] = useState([]);

    // const addFave = (fave) => {
    //     const isAlreadyStarred = faves.filter(
    //         item => item === fave
    //     )

    //     if (isAlreadyStarred.length > 0) {
    //         return;
    //     }
    //     const newFavesList = [...faves, fave];
    //     setFaves(newFavesList);
    //     // saveToLocalStorage(newFavesList);
    // };

    return (
        <>
            <CardBox>
                {media_type === "image" ? (
                    <ModalImage
                        small={url}
                        large={hdurl}
                        hideDownload={true}
                        showRotate={true}
                        alt={title}
                    />
                ) : (
                    <iframe
                        title="NASA video"
                        src={url}
                        frameBorder="0"
                        allow="encrypted-media"
                        className="video"
                    />
                )}
                <h3>{date}</h3>
                <h2>{title}</h2>
                <span onClick={() => {
                    // addFave()
                }}>
                    <StarButton />
                </span>
            </CardBox>
        </>
    )
}

const CardBox = styled.div`
    box-shadow: 10px 10px 5px rgba(60,79,118, 0.3);
    border-radius: 5px;
    background-color: #EFE6FF;
    color: #222;
    width: fit-content;
    height: fit-content;
    overflow: hidden;
    position: relative;
`
