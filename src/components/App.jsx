import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import Logo from "../assets/Logo.svg";
import Line from "../assets/Line.svg";
import "./App.css";
import NotFound from "./NotFound";

const App = () => {
    
    const [menuItem, setMenuItem] = useState("");
    const [isMobileBtnClicked, setIsMobileBtnClicked] = useState(false);    

    const location = useLocation();


    useEffect(() => {
        isMobileBtnClicked ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    }, [isMobileBtnClicked]);

    useEffect(() => {
        
        function handleMenu() {
        

            switch (location.pathname) {
                case "/":
                    setMenuItem("home-item");
                    break;
                case "/destination":
                    setMenuItem("destination-item");
                    break;
                case "/crew":
                    setMenuItem("crew-item");
                    break;
                case "/technology":
                    setMenuItem("technology-item");
                    break;            
                default:
                    break;
            }
        }

        handleMenu();
    }, [location]);

    function handleMenuOpen() {
        window.scrollTo(0, 0);
        return setIsMobileBtnClicked(!isMobileBtnClicked);
    }    

    return (
        <>
            <header className="header">
                <img className="header-logo" src={Logo} alt="Logo" />


                <div className="header-menu">
                    <button onClick={handleMenuOpen} className={isMobileBtnClicked ? "mobile-menu-btn clicked" : "mobile-menu-btn"}><div /></button>
                    <div className={menuItem}/>
                    <img src={Line} alt="Line" className="header-line" />
                    <ul className={isMobileBtnClicked ? "menu-items menu-opened" : "menu-items"}>
                        <li>
                            <Link className="menu-item" to="/"><strong>00</strong>Home</Link>
                            <div className={menuItem === "home-item" ? "home-item mobile-selected": "mobile-off"}/>
                        </li>
                        <li>
                            <Link className="menu-item" to="/destination"><strong>01</strong>Destino</Link>
                            <div className={menuItem === "destination-item" ? "destination-item mobile-selected" : "mobile-off"}/>
                        </li>
                        <li>
                            <Link className="menu-item" to="/crew"><strong>02</strong>Equipe Técnica</Link>
                            <div className={menuItem === "crew-item" ? "crew-item mobile-selected" : "mobile-off"}/>
                        </li>
                        <li>
                            <Link className="menu-item" to="/technology"><strong>03</strong>Técnologia</Link>
                            <div className={menuItem === "technology-item" ? "technology-item mobile-selected" : "mobile-off"}/>
                        </li>
                    </ul>
                </div>
            </header>

            <Routes>
                <Route exact path="/" element={<Home setMenuItem={setMenuItem} />} />
                <Route exact path="/destination" element={<Destination setMenuItem={setMenuItem} />} />
                <Route exact path="/crew" element={<Crew setMenuItem={setMenuItem} />} />
                <Route exact path="/technology" element={<Technology setMenuItem={setMenuItem} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>         

            <footer className="footer">
                <div className="footer-wrapper">
                    <small>Desenvolvido por Matheus Kristman</small>
                    <div className="dev-socials">
                        <a target="_blank" rel="noreferrer" href="https://github.com/MatheusKristman"><i className="fa-brands fa-square-github"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/matheus-kristman-07a947171/"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default App;