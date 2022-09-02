import React, { useEffect } from "react";
import data from "../data.json";
import "./Technology.css";

const Technology = (props) => {


    useEffect(() => {
        handleSelect(0);
    }, []);

    function selectTech(id) {
        const article = document.querySelectorAll(".technology-wrapper");

        article.forEach((element) => {
            element.id === `tech${id}` ? element.classList.remove("desactive") : element.classList.add("desactive");
        });
    }

    function selectBtn(id) {
        const btn = document.querySelectorAll(".technology-menu-item");

        btn.forEach((element) => {
            element.id === `techBtn${id}` ? element.classList.add("active") : element.classList.remove("active");
        })
    }

    function handleSelect(id) {
        selectTech(id);
        selectBtn(id);
    }

    return (
        <div className="technology-container">
            <span className="technology-title"><strong>03</strong>lançamento espacial 101</span>
            {data.technology.map((technology, index) => (
                <article key={index} id={`tech${index}`} className="technology-wrapper">
                    

                    <div className="technology-infos">
                        <ul className="technology-menu-items">
                            <li onClick={() => handleSelect(0)} id="techBtn0" className="technology-menu-item active">1</li>
                            <li onClick={() => handleSelect(1)} id="techBtn1" className="technology-menu-item">2</li>
                            <li onClick={() => handleSelect(2)} id="techBtn2" className="technology-menu-item">3</li>
                        </ul>

                        <div className="technology-info">
                            <h2>a terminologia...</h2>
                            <h1>{technology.name}</h1>
                            <p>{technology.description}</p>
                        </div>
                    </div>                    

                    <div className="technology-images">
                        <img src={require(`../assets/technology/${document.body.clientWidth > 1035 ? technology.images.portrait : technology.images.landscape}`)} alt="technology" />
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Technology;
