import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
    }, []);

    return (
        <Button>
            <FontAwesomeIcon
                icon={faArrowUp}
                onClick={scrollToTop}
                style={{ display: visible ? "inline" : "none" }} />
        </Button>
    );
}

export const Button = styled.div`
    vertical-align: middle;
    padding-bottom: 5rem;
    height: 20px;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: #1b1725;
`

export default ScrollButton;