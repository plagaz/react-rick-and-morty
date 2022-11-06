import { useEffect, useState } from "react";
import Character from "./Character";

function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacter(data.results);
    }
    fetchData();
  }, []);
  return (
    <div>
      {character.map((character) => {
        return (
          <Character key={character.id} character={character}/>
        );
      })}
    </div>
  );
}

export default CharacterList;
