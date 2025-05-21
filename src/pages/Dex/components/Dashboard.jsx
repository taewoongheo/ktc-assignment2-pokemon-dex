import React from "react";
import styled from "styled-components";
import pokeball from "../../../assets/pokeball.svg";
import PokemonCardBase from "./PokemonCardBase";

const Container = styled.div`
  background-color: rgb(238, 238, 238);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 1rem;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 4rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const PokeballContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokeballImage = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
  }
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
        {list.map((pokemon, i) => {
          if (pokemon) {
            return (
              <PokemonCardBase
                key={`${pokemon.id}-${i}`}
                pokemon={pokemon}
                onButtonClick={deletePokemon}
                buttonLabel={"삭제"}
              />
            );
          }
          return <Pokeball />;
        })}
      </DashboardGrid>
    </Container>
  );
}

export default Dashboard;
