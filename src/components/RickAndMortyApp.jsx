import Caracter from "./Caracter";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const RickAndMortyApp = () => {
  const [character, setCharacter] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  let [searchParams, setSearchParamns] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((Response) => Response.json())
      .then((data) => {
        setCharacter(data);
        console.log(data);
        fetchEpisodes(data.episode.slice(0, 5));
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
};

export default RickAndMortyApp;
