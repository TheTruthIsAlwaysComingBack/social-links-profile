import React from "react";
import UserDetails from "./UserDetails";
import "./Card.css";

const Card = ({ character }) => {
  return (
    <div className="card">
      <UserDetails character={character} />
    </div>
  );
};

export default Card;
