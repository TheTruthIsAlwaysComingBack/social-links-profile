import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RickAndMortyApp from "../components/RickAndMortyApp";
import "./Card.jsx";

const Navegation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Card} />
        <Route path="/Caracter" element={RickAndMortyApp} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navegation;
