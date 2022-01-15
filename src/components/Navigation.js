import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSatellite, faMeteor, faStar, faRocket } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const showMenu = () => setIsOpen(!isOpen);

    return (
        <nav>
            <Navigation>
                <Link to="#" className="menu-bars">
                    <FontAwesomeIcon icon={faBars} className="fa-2x" onClick={showMenu} />
                </Link>
                <Link to="/"><Title>Spacetagram v2</Title></Link>
                <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-links">
                        <NavItem>
                            <MenuClose>
                                <Link to="#">
                                    <FontAwesomeIcon icon={faTimes} onClick={showMenu} className="menu-exit fa-2x" />
                                </Link>
                            </MenuClose>
                        </NavItem>
                        <NavItem><Link to="/"><FontAwesomeIcon icon={faSatellite} className="fa-fw" /> Today</Link></NavItem>
                        <NavItem><Link to="/explore"><FontAwesomeIcon icon={faMeteor} className="fa-fw" /> Explore</Link></NavItem>
                        {/* <NavItem><a href="/explore/#starred"><FontAwesomeIcon icon={faStar} className="fa-fw" /> Starred</a></NavItem> */}
                        <NavItem><Link to="/about"><FontAwesomeIcon icon={faRocket} className="fa-fw" /> About</Link></NavItem>
                    </ul>
                </nav>
            </Navigation>
        </nav>
    )
}

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efe6ff;
`;

const NavItem = styled.li`
    font-size: 1.2rem;

    @media only screen and (max-width: 700px) { 
        padding: 1.2rem .2rem;
    }
    @media only screen and (min-width: 701px) {
        padding: 2rem;
    }
    @media only screen and (min-width: 701px) and (max-width: 770px) {
        font-size: 1rem;
    }
`;

const MenuClose = styled.div`
    padding-bottom: 2rem;
`;

const Title = styled.h1`
    font-size: 1.4rem;
    color: #1b1725;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    
    @media (max-width: 360px) {
        font-size: 1rem;
        }
`;