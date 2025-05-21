import React from "react";
import styled from "styled-components";
import {
  AddButton,
  PokemonId,
  PokemonImage,
  PokemonName,
  StyledPokemonCard,
} from "../styles/PokemonCard.styles";

const Container = styled.div`
  background-color: rgb(238, 238, 238);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Dashboard({ selectedPokemon, setSelectedPokemon }) {
  const deletePokemon = (id) => {
    setSelectedPokemon([
      ...selectedPokemon.filter((pokemon) => pokemon.id !== id),
    ]);
  };

  return (
    <Container>
      <TitleContainer>
        <h1>포켓몬 추가</h1>
      </TitleContainer>
      <DashboardGrid>
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
      </DashboardGrid>
    </Container>
  );
}

export default Dashboard;
