import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  background-color: rgb(238, 238, 238);
  padding: 20px;
  border-radius: 10px;
`;

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

const AddButton = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid rgb(213, 213, 213);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
`;

function Dashboard({ selectedPokemon, setSelectedPokemon }) {
  console.log(selectedPokemon);

  const deletePokemon = (id) => {
    setSelectedPokemon([
      ...selectedPokemon.filter((pokemon) => pokemon.id !== id),
    ]);
  };

  return (
    <Container>
      {selectedPokemon?.map((pokemon) => {
        return (
          <StyledPokemonCard>
            <PokemonImage src={pokemon.image} alt={pokemon.name} />
            <PokemonName>{pokemon.name}</PokemonName>
            <PokemonId>No.{pokemon.id}</PokemonId>
            <AddButton onClick={() => deletePokemon(pokemon.id)}>
              삭제
            </AddButton>
          </StyledPokemonCard>
        );
      })}
    </Container>
  );
}

export default Dashboard;
