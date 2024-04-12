import React from "react";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import "./Card.css";

const Card = (props) => {
  const user = props.user;
  return (
    <div className="card">
      <UserDetails user={user} />
      <ButtonSection />
    </div>
  );
};

export default Card;
