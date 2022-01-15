import React from "react";
import Today from "./components/Today";
import Navigation from "./components/Navigation";

export default function Home() {
    return (
        <>
        <Navigation />
            <section>
                <h1>Spacetagram v2</h1>
                <p>A space to view our universe.</p>
            </section>
            <Today />
        </>
    )
}