import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarButton() {
    const [starMedia, setStarMedia] = useState(false);

    const handleToggle = () => {
        setStarMedia((star) => {
            return !star;
        });
    };

    return (
        <>
            <span onClick={() => { handleToggle(); }}>
                Add Star{" "}
                {
                    starMedia ? (
                        <FontAwesomeIcon icon={faStar} className="fa-1x fa-fw star-toggle" />
                    ) : (
                        <FontAwesomeIcon icon={faStar} className="fa-1x fa-fw star" />
                    )}
            </span>
        </>

    );
};