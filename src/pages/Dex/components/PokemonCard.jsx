import React from "react";
import styled from "styled-components";

const StyledPokemonCard = styled.div`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgb(213, 213, 213);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

const PokemonName = styled.h1`
  font-size: 16px;
  font-weight: 600;
  padding-top: 20px;
  padding-bottom: 18px;
`;

const PokemonId = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 18px;
`;

const AddButton = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid rgb(213, 213, 213);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
`;

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
