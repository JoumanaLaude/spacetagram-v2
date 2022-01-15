import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalImage from "react-modal-image";

const apiKey = process.env.REACT_APP_APOD_KEY;

export default function Today() {
    const [today, setToday] = useState(null);

    useEffect(() => {
        fetchMedia();
        async function fetchMedia() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await res.json();
            setToday(data);
            console.log(data);
        }
    }, []);

    // if (!today) return <Loading />;

    return (
        <>
            <section>
                <Title>Today ({today.date}): {today.title}</Title>
                <Box>
                <Card>
                    {today.media_type === "image" ? (
                        <ModalImage
                            small={today.url}
                            large={today.hdurl}
                            hideDownload={true}
                            showRotate={true}
                            alt={today.title}
                            className="today"
                        />
                    ) : (
                        <iframe
                            title="space-video"
                            src={today.url}
                            frameBorder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowFullScreen
                            className="video"
                            loading="lazy"
                        />
                    )}
                    <div>
                        <CardText>{today.explanation}</CardText>
                        <CardText>{today.copyright}</CardText>
                    </div>
                </Card>
            </Box>
            </section>
        </>
    )
}

const Card = styled.div`
    box-shadow: 10px 10px 5px rgba(60,79,118, 0.3);
    border-radius: 5px;
    background-color: #EFE6FF;
    color: #222;
    width: fit-content;
    height: fit-content;
`

const CardText = styled.p`
    line-height: 1.4rem;
    padding: 2rem;
    text-align: justify;
    @media only screen and (max-width: 800px) {
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
    padding-bottom: 2rem;

    @media only screen and (max-width: 700px) {
        font-size: 1rem;
        }
`;