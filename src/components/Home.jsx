import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {

    const navigate = useNavigate();    

    function handleNavigation() {
        navigate("/destination");
    }

    return (
        <div className="home-container">
            <div className="home-wrapper">
                <main className="home-info">
                    <h2>então, você quer viajar para o</h2>
                    <h1>Espaço</h1>
                    <p>
                        Vamos encarar! se você quer ir para o espaço, você também pode ir genuinamente
                        para o espaço sideral e não pairar à beira dele. Bem, sente-se e relaxe
                        porque nós lhe daremos uma experiência verdadeiramente fora deste mundo!
                    </p> 
                </main>
                <div className="home-image">
                    <div onClick={handleNavigation} className="explore-circle">
                        <h2>Explorar</h2>
                    </div>
                    <div className="explore-circle-hover" />
                </div>              
            </div>
        </div>
    )
}

export default Home;