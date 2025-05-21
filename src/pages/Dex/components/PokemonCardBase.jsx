import React from "react";
import { useNavigate } from "react-router-dom";
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
  background-color: rgb(255, 255, 255);
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

export const Button = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid rgb(213, 213, 213);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  background-color: rgb(243, 243, 243);
  cursor: pointer;
`;

function PokemonCardBase({ pokemon, onButtonClick, buttonLabel }) {
  const navigate = useNavigate();

  const { id, name, image } = pokemon;

  return (
    <StyledPokemonCard
      onClick={() =>
        navigate(`/pokemon/${id}`, {
          state: pokemon,
        })
      }
    >
      <PokemonImage src={image} alt={name} />
      <PokemonName>{name}</PokemonName>
      <PokemonId>No.{id}</PokemonId>
      {onButtonClick && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onButtonClick(id);
          }}
        >
          {buttonLabel}
        </Button>
      )}
    </StyledPokemonCard>
  );
}

export default PokemonCardBase;
