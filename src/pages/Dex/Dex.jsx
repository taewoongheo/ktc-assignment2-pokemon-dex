import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPokemonInfoList } from "../../api/api";
import PokemonCard from "./components/PokemonCard";
import Dashboard from "./components/Dashboard";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
`;

const PokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  width: 100%;
  padding-bottom: 5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function Dex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonInfoList();
        setPokemonList(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Container>
      <Dashboard
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokemonList>
        {pokemonList.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
          );
        })}
      </PokemonList>
    </Container>
  );
}

export default Dex;
