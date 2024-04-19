import React from "react";
import "./Caracter.css";

const Caracter = ({ character, episodes }) => {
  const getStatusClassName = () => {
    switch (character.status) {
      case "Alive":
        return "alive";
      case "Dead":
        return "dead";
      default:
        return "unknown";
    }
  };

  return (
    <>
      <div className="card">
        <div className="principal">
          <img src={character.image} alt={`avatar de ${character.name}`}></img>
          <div className="status">
            <div className={`bolita ${getStatusClassName()}`}></div>
            <p>
              {character.status} - {character.species}
            </p>
          </div>
          <p className="type">{character.name}</p>
        </div>
        <div className="secundario">
          <p className="texto-secundario">Episodios:</p>
          <div className="episode">
            {episodes.map((episodio) => (
              <div key={episodio.id} className="episode-contenedor">
                <p>
                  {episodio.name} ({episodio.episode})
                </p>
                <p>{episodio.created}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="button">Home</button>
      </div>
    </>
  );
};

export default Caracter;
