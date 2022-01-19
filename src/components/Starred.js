import React,
{
    // useContext, 
    useState
} from "react";
import Navigation from "./Navigation";
import styled from "styled-components";
import Top from "./Top";
// import FavoritesContext from "../FavoritesProvider";


export default function Starred() {
    // const {faves, removeFave} = useContext(FavoritesContext);

    const [faves, setFaves] = useState([]);

    const removeFave = (e) => {
        const url = e.target.getAttribute("url")
        setFaves(faves.filter(favorite => favorite.url !== url));
    };

    return (
        <>
            <Navigation />
            <section id="starred">
                <Box>
                    <h1>My Stars</h1><hr />
                    <Grid>
                        {faves.map((favorite, faved) => (
                            <Card key={faved}>
                                <img src={favorite.url} alt={favorite.title} />
                                <h3>{favorite.date}</h3>
                                <h2>{favorite.title}</h2>
                                <button
                                    type="button"
                                    url={favorite.url}
                                    onClick={removeFave}
                                >Remove Star
                                </button>
                            </Card>
                        ))}
                    </Grid>
                </Box>
                <Top />
            </section>
        </>
    )
}

const Grid = styled.div`
    display: grid;
    grid-row: 2 / auto;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
    padding: 4rem;
    
    @media only screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }

    @media only screen and (min-width: 1500px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const Box = styled.div`
    width: 80%;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 3rem;
    
    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`;

const Card = styled.div`
    box-shadow: 10px 10px 5px rgba(60,79,118, 0.3);
    border-radius: 5px;
    background-color: #EFE6FF;
    color: #222;
    width: fit-content;
    height: fit-content;
`
