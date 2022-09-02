import React, { useEffect, useState } from "react";
import Moon from "../assets/destination/image-moon.png";
import Mars from "../assets/destination/image-mars.png";
import Europa from "../assets/destination/image-europa.png";
import Titan from "../assets/destination/image-titan.png";
import data from '../data.json';
import "./Destination.css";

const Destination = () => {
    
    const [destinationName, setDestinationName] = useState("Moon");

    useEffect(() => {
        selectInfo(0);
    }, []);

    useEffect(() => {
        handleDestinationAnimation();
    }, [destinationName]);

    function handleDestinationSelection(dest) {
        setDestinationName(dest);
    }

    function handleDestinationAnimation() {
        const moon = document.querySelector("#moon");
        const mars = document.querySelector("#mars");
        const europa = document.querySelector("#europa");
        const titan = document.querySelector("#titan");
        
        switch (destinationName) {
            case "Moon":
                mars.classList.remove("destination-selected");
                europa.classList.remove("destination-selected");
                titan.classList.remove("destination-selected");
                europa.classList.remove("destination-not-selected-left");
                mars.classList.remove("destination-not-selected-left");
                titan.classList.remove("destination-not-selected-left");
                europa.classList.remove("destination-not-selected-right");
                mars.classList.remove("destination-not-selected-right");
                titan.classList.remove("destination-not-selected-right");
                
                moon.classList.remove("destination-not-selected-left");

                moon.classList.add("destination-selected");
                mars.classList.add("destination-not-selected-right");
                europa.classList.add("destination-not-selected-right");
                titan.classList.add("destination-not-selected-right");
                break;
            
            case "Mars":
                moon.classList.remove("destination-selected");
                europa.classList.remove("destination-selected");
                titan.classList.remove("destination-selected");
                moon.classList.remove("destination-not-selected-left");
                europa.classList.remove("destination-not-selected-left");
                titan.classList.remove("destination-not-selected-left");
                moon.classList.remove("destination-not-selected-right");
                europa.classList.remove("destination-not-selected-right");
                titan.classList.remove("destination-not-selected-right");

                mars.classList.remove("destination-not-selected-left");
                mars.classList.remove("destination-not-selected-right");

                mars.classList.add("destination-selected");
                moon.classList.add("destination-not-selected-left");
                europa.classList.add("destination-not-selected-right");
                titan.classList.add("destination-not-selected-right");
                break;
            
            case "Europa":
                moon.classList.remove("destination-selected");
                mars.classList.remove("destination-selected");
                titan.classList.remove("destination-selected");
                moon.classList.remove("destination-not-selected-left");
                mars.classList.remove("destination-not-selected-left");
                titan.classList.remove("destination-not-selected-left");
                moon.classList.remove("destination-not-selected-right");
                mars.classList.remove("destination-not-selected-right");
                titan.classList.remove("destination-not-selected-right");

                europa.classList.remove("destination-not-selected-left");
                europa.classList.remove("destination-not-selected-right");

                europa.classList.add("destination-selected");
                moon.classList.add("destination-not-selected-left");
                mars.classList.add("destination-not-selected-left");
                titan.classList.add("destination-not-selected-right");
                break;
            
            case "Titan":
                moon.classList.remove("destination-selected");
                mars.classList.remove("destination-selected");
                europa.classList.remove("destination-selected");
                moon.classList.remove("destination-not-selected-left")
                mars.classList.remove("destination-not-selected-left")
                europa.classList.remove("destination-not-selected-left")
                moon.classList.remove("destination-not-selected-right")
                mars.classList.remove("destination-not-selected-right")
                europa.classList.remove("destination-not-selected-right")

                titan.classList.remove("destination-not-selected-right");

                titan.classList.add("destination-selected");
                moon.classList.add("destination-not-selected-left");
                mars.classList.add("destination-not-selected-left");
                europa.classList.add("destination-not-selected-left");
        }        
    }

    function selectInfo(id) {
        const infoEl = document.querySelectorAll(".destination-info");

        infoEl.forEach((el) => { 
            el.id === `dest${id}` ? el.classList.remove("desactive") : el.classList.add("desactive");
        });
    }

    return (
        <div className="destination-container">
            <h1 className="destination-title"><strong>01</strong>escolha seu destino</h1>
            <section className="destination-wrapper">
                <div className="destination-image">
                    <img id="moon" className="destination-selected" src={Moon} alt="destination" />
                    <img id="mars" className="destination-not-selected-right" src={Mars} alt="destination" />
                    <img id="europa" className="destination-not-selected-right" src={Europa} alt="destination" />
                    <img id="titan" className="destination-not-selected-right" src={Titan} alt="destination" />
                </div>            

                {data.destinations.map((dest, index) => (
                    <div key={index} id={`dest${index}`} className="destination-info">
                        <ul className="destination-menu">
                            <li onClick={() => {
                                    handleDestinationSelection("Moon");
                                    selectInfo(0);
                                }} 
                                className={destinationName === "Moon" ? "selected" : ""}
                            >Lua</li>
                            <li onClick={() => {
                                    handleDestinationSelection("Mars");
                                    selectInfo(1);
                                }} 
                                className={destinationName === "Mars" ? "selected" : ""}
                            >Marte</li>
                            <li onClick={() => {
                                    handleDestinationSelection("Europa");
                                    selectInfo(2);
                                }} 
                                className={destinationName === "Europa" ? "selected" : ""}
                            >Europa</li>
                            <li onClick={() => {
                                    handleDestinationSelection("Titan");
                                    selectInfo(3);
                                }} 
                                className={destinationName === "Titan" ? "selected" : ""}
                            >Titã</li>
                        </ul>

                        <h1 className="destination-dest">{dest.name}</h1>

                        <p className="destination-desc">
                            {dest.description}
                        </p>

                        <div className="destination-specs">
                            <div className="destination-line"/>
                            <div className="destination-specs-wrapper">
                                <div className="destination-dist-div">
                                    <h3>distância média</h3>
                                    <h2>{dest.distance}</h2>
                                </div>

                                <div className="destination-travel-div">
                                    <h3>tempo estimado de viagem</h3>
                                    <h2>{dest.travel}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}                
            </section>
        </div>
    );
};

export default Destination;
