import "./App.css";
import Caracter from "./components/Caracter";
import React, { useEffect, useState } from "react";

function App() {
  const [character, setCharacter] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((Response) => Response.json())
      .then((data) => {
        setCharacter(data);
        console.log(data);
        fetchEpisodes(data.episode.slice(0, 5)); // Obtener los primeros 4 episodios
      });
  }, []);

  const fetchEpisodes = (episodesUrls) => {
    const promesas = episodesUrls.map((url) =>
      fetch(url).then((response) => response.json())
    );

    Promise.all(promesas)
      .then((episodios) => {
        setEpisodes(episodios);
        console.log(episodios);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {character && (
        <Caracter
          key={character.id}
          character={character}
          episodes={episodes}
        />
      )}
    </>
  );
}

export default App;
