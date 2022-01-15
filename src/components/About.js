import React from "react";
import Navigation from "./Navigation";
import gif from "./stars-gif.gif";

export default function About() {
    return (
        <>
            <Navigation />
            <section>
                <h1>About</h1>
                <p>Spacetagram is created with NASA"s Astronomy Picture of the Day API.
                    <br />Media includes images and videos that date back to 1995!</p>
                <img src={gif} alt="anime space gif" className="gif" />
                <p><em>This app was created by JL for Shopify's Front End Developer Intern Challenge.</em></p>
            </section>
        </>
    )
}