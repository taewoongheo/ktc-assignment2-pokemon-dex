import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AddButton, DeleteButton } from "../../../components/Button";

const StyledPokemonCard = styled.div`
  padding: 1rem;
  border-radius: 1rem;
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

  @media (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }
`;

const PokemonName = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const PokemonId = styled.p`
  font-size: 1rem;
  font-weight: 600;
  padding-bottom: 1rem;
`;

const PokemonTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`;

const PokemonType = styled.span`
  background-color: rgb(243, 243, 243);
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
`;

function PokemonCardBase({ pokemon, onButtonClick, buttonLabel }) {
  const navigate = useNavigate();

  const { id, name, image, types } = pokemon;

  return (
    <StyledPokemonCard onClick={() => navigate(`/pokemon/${id}`)}>
      <PokemonImage src={image} alt={name} />
      <PokemonName>{name}</PokemonName>
      <PokemonId>No.{id}</PokemonId>
      <PokemonTypeContainer>
        <span>타입: </span>
        {types.map((el) => (
          <PokemonType key={el}>{el}</PokemonType>
        ))}
      </PokemonTypeContainer>
      {buttonLabel === "추가" ? (
        <AddButton
          onClick={(e) => {
            e.stopPropagation();
            onButtonClick(id);
          }}
        >
          추가
        </AddButton>
      ) : (
        <DeleteButton
          onClick={(e) => {
            e.stopPropagation();
            onButtonClick(id);
          }}
        >
          삭제
        </DeleteButton>
      )}
    </StyledPokemonCard>
  );
}

export default PokemonCardBase;
