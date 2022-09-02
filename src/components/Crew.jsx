import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import "./Crew.css";

const Crew = () => {

    const navigate = useNavigate();

    useEffect(() => {
        function loadFirst() {
            selectCrew(0);
            selectBtn(0);
        }

        loadFirst();
    }, []);

    function selectCrew(id) {
        
        const card = document.querySelectorAll(".crew-wrapper");        

        card.forEach((e) => {
            e.id === `crew${id}` ? e.classList.remove("desactive") : e.classList.add("desactive");
        });        
    }

    function selectBtn(id) {

        const btn = document.querySelectorAll(".crew-menu-item");

        btn.forEach((e) => {
            console.log(e);
            e.id === `btn${id}` ? e.classList.add("active") : e.classList.remove("active");
        });
    }

    function handleSelect(id) {
        selectCrew(id);
        selectBtn(id);
    }

    function handleNextPage() {
        window.scrollTo(0, 0);
        navigate("/technology");
    }

    return (
        <div className="crew-container">
            <span className="crew-title"><strong>02</strong>conheça sua equipe</span>
            {data.crew.map((crew, index) => (
                <section key={index} id={`crew${index}`} className="crew-wrapper">
                    <div className="crew-info">
                        <div>
                            <h2>{crew.role}</h2>
                            <h1>{crew.name}</h1>
                            <p>{crew.bio}</p>
                        </div>

                        <ul className="crew-menu-items">
                            <li onClick={() => handleSelect(0)} id="btn0" className="crew-menu-item active"></li>
                            <li onClick={() => handleSelect(1)} id="btn1" className="crew-menu-item"></li>
                            <li onClick={() => handleSelect(2)} id="btn2" className="crew-menu-item"></li>
                            <li onClick={() => handleSelect(3)} id="btn3" className="crew-menu-item"></li>
                        </ul>
                    </div>

                    <div className="crew-images">
                        <img src={require(`../assets/crew/${crew.images.png}`)} alt="" />
                    </div>

                </section>
            ))}

            {document.body.clientWidth <= 600 ? (                    
                <div onClick={handleNextPage} className="mobile-crew-next-page">
                    <h2>Tecnologias do transporte</h2>
                </div>
            ) : (
                null
            )}
        </div>
    );
};

export default Crew;
