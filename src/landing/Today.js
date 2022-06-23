import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import styled from "styled-components";
import ModalImage from "react-modal-image";

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function Today() {
    const [mediaData, setMediaData] = useState(null);

    useEffect(() => {
        fetchMedia();
        async function fetchMedia() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await res.json();
            setMediaData(data);
            console.log(data);
        }
    }, []);

    if (!mediaData) return <Loading />;

    return (
        <section>
                <Title>Today ({mediaData.date}) <br /> Let's take a look at {mediaData.title}:</Title>
                <Box>
                    <TodayCard>
                        {mediaData.media_type === "image" ? (
                            <ModalImage
                                small={mediaData.url}
                                large={mediaData.hdurl}
                                hideDownload={true}
                                showRotate={true}
                                alt={mediaData.title}
                                className="today"
                            />
                        ) : (
                            <iframe
                                title="space-video"
                                src={mediaData.url}
                                frameBorder="0"
                                gesture="media"
                                allow="encrypted-media"
                                allowFullScreen
                                className="video"
                                loading="lazy"
                            />
                        )}
                        <div className="card-container">
                            <CardText>{mediaData.explanation}</CardText>
                            <CardText>{mediaData.copyright}</CardText>
                        </div>
                    </TodayCard>
                </Box>
        </section>
    )
}

const TodayCard = styled.div`
    box-shadow: 10px 10px 5px rgba(60,79,118, 0.3);
    border-radius: 5px;
    background-color: #EFE6FF;
    color: #222;
    width: fit-content;
    height: fit-content;
`

const CardText = styled.p`
    line-height: 1.4em;
    padding: 2rem;
    text-align: justify;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

const Box = styled.div`
    width: 50%;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 5rem;
`;

const Title = styled.h3`
    font-size: 1.4rem;
    padding-bottom: 1rem;

    @media only screen and (max-width: 700px) {
        font-size: 1rem;
        }
`;