import React from "react";
import styled from "styled-components";
import {
  AddButton,
  PokemonId,
  PokemonImage,
  PokemonName,
  StyledPokemonCard,
} from "../styles/PokemonCard.styles";
import pokeball from "../../../assets/pokeball.svg";

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
  margin-bottom: 20px;
`;

const PokeballContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokeballImage = styled.img`
  width: 80px;
  height: 80px;
`;

function Pokeball() {
  return (
    <PokeballContainer>
      <PokeballImage src={pokeball} alt="Pokeball" />
    </PokeballContainer>
  );
}
function Dashboard({ selectedPokemon, setSelectedPokemon }) {
  const list = Array.from({ length: 6 }, () => null);
  for (let i = 0; i < selectedPokemon.length; i++) {
    list[i] = selectedPokemon[i];
  }

  const deletePokemon = (id) => {
    setSelectedPokemon([
      ...selectedPokemon.filter((pokemon) => pokemon.id !== id),
    ]);
  };

  return (
    <Container>
      <TitleContainer>
        <h1>나만의 포켓몬</h1>
      </TitleContainer>
      <DashboardGrid>
        {list.map((pokemon) => {
          if (pokemon) {
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
          }
          return <Pokeball />;
        })}
      </DashboardGrid>
    </Container>
  );
}

export default Dashboard;
