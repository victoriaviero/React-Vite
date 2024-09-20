import React from "react";
import "./Card.css";
function Card({ title, precio, imagenLink, descripcion, buttonText, onButtonClick }) {

    return (
        <div className="card">
            <img className="img-card" src={imagenLink} alt={title} />
            <div className="card-content">
                <h1>{title}</h1>
                <p>{descripcion}</p>
                <h2>{precio}</h2>
                {buttonText && (
          <button className="card-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
            </div>
        </div>
    )
}

export default Card