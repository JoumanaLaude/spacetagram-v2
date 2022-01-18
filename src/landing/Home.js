import React from "react";
import Today from "./Today";
import Navigation from "../components/Navigation";

export default function Home() {
    return (
        <>
            <Navigation />
            <main>
                <h1>Spacetagram</h1>
                <p>A space to view our universe.</p>
                <Today />
            </main>
        </>
    )
}