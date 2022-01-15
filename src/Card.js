import React from "react";

function Card(props) {

    return (
        <>
            {props.media.map((item, star) => (
                <div key={star}>
                    <h2>{item.title}</h2>
                    <h3>{item.date}</h3>
                    <img src={item.url} alt={item.title} />
                    {/* <button onClick={() => props.addFave(item)} type="button">Add to array</button> */}
                </div>
            ))}

        </>
    )
}

export default Card;