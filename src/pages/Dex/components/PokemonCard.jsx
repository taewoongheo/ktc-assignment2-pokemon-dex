import React from "react";
import PokemonCardBase from "./PokemonCardBase";

function PokemonCard({ pokemon, setSelectedPokemon }) {
  const addPokemon = (id) => {
    setSelectedPokemon((prev) => {
      if (prev.length === 6) {
        alert("더 이상 선택할 수 없습니다.");
        return prev;
      }

      if (prev.find((pokemon) => pokemon.id === id)) {
        alert("이미 선택된 포켓몬입니다.");
        return prev;
      } else {
        return [...prev, pokemon];
      }
    });
  };

  return (
    <PokemonCardBase
      pokemon={pokemon}
      onButtonClick={addPokemon}
      buttonLabel={"추가"}
    />
  );
}

export default PokemonCard;
