import { useState } from "react";

import "./App.css";
import avatarJessica from "/avatar-jessica.jpeg";

function App() {
  return (
    <>
      <div className="card">
        <div className="contenedor">
          <img src={avatarJessica} alt="imagen de mujer" />

          <h1>Jessica Randall</h1>

          <h2>London, United Kingdom</h2>

          <p>"Front-end developer and avid reader".</p>
        </div>

        <div className="buttons">
          <button className="botones">GitHub</button>
          <button className="botones">Frontend Mentor</button>
          <button className="botones">LinkedIn</button>
          <button className="botones">Twitter</button>
          <button className="botones">Instagram</button>
        </div>
      </div>
    </>
  );
}

export default App;
