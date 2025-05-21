import React from "react";
import {
  AddButton,
  PokemonId,
  PokemonImage,
  PokemonName,
  StyledPokemonCard,
} from "../styles/PokemonCard.styles";

function PokemonCard({ pokemon, setSelectedPokemon }) {
  const { id, name, image } = pokemon;

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
    <StyledPokemonCard>
      <PokemonImage src={image} alt={name} />
      <PokemonName>{name}</PokemonName>
      <PokemonId>No.{id}</PokemonId>
      <AddButton onClick={() => addPokemon(id)}>추가</AddButton>
    </StyledPokemonCard>
  );
}

export default PokemonCard;
