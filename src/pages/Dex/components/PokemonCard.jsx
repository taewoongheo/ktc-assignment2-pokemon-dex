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
        alert("포켓몬은 최대 6마리까지만 추가할 수 있습니다.");
        return prev;
      }

      if (prev.find((pokemon) => pokemon.id === id)) {
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
