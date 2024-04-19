import React from "react";
import "./UserDetails.css";

const UserDetails = ({ character }) => {
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
    <div className="contenedor">
      <div className="image">
        <img src={character.image} alt={`avatar de ${character.name}`}></img>
      </div>
      <div className="contenido">
        <h2>{character.name}</h2>
        <div className="status">
          <div className={`bolita ${getStatusClassName()}`}></div>
          <p>
            {character.status} - {character.species}
          </p>
        </div>
        <p className="text-gray-principal">Last known location:</p>
        <p className="location">{character.location.name}</p>
        <p className="text-gray">First seen in:</p>
        <p className="view">{character.type}</p>
      </div>
    </div>
  );
};

export default UserDetails;
