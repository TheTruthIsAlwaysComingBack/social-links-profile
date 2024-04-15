import React from "react";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import "./Card.css";

const Card = (props) => {
  const user = props.user;
  const socialLinks = user["social-links"];

  return (
    <div className="card">
      <UserDetails user={user} />
      <ButtonSection socialLinks={socialLinks} />
    </div>
  );
};

export default Card;
