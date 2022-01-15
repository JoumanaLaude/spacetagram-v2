import React from "react";
import Navigation from "./Navigation";

export default function About() {
    return (
        <>
            <Navigation />
            <section>
                <h1>About</h1>
                <p>Spacetagram is created with NASA"s Astronomy Picture of the Day API.
                    <br />Media includes images and videos that date back to 1995!</p>
            </section>
        </>
    )
}