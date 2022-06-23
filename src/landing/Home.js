import React from "react";
import Today from "./Today";

export default function Home() {
    return (
        <>
            <main>
                <h1>Spacetagram</h1>
                <p>A space to view our universe.</p>
                <Today />
            </main>
        </>
    )
}