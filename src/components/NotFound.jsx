import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    const navigate = useNavigate();

    function handleClick() {
        console.log("clickado");
        navigate("/");
    }

    return (
        <div className="notfound-container">
            <div className="notfound-wrapper">
                <h1 className="notfound-title">Erro 404</h1>
                <h2 className="notfound-desc">Página não encontrada!</h2>

                <button onClick={handleClick} className="notfound-btn">Voltar para Home</button>
            </div>
        </div>
    );
};

export default NotFound;
