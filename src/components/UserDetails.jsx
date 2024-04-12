import React from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  const user = props.user;

  return (
    <div className="contenedor">
      <img src={user.avatar} alt={`avatar de ${user.name}`}></img>

      <h1>{user.name}</h1>

      <h2>{user.location}</h2>

      <p>{user.description}</p>
    </div>
  );
};

export default UserDetails;
