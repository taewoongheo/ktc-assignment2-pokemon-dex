import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPokemonInfoList } from "../api/api";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
`;

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

const PokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  width: 100%;
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

function PokemonCardComponent({ pokemon }) {
  const { id, name, image } = pokemon;

  return (
    <StyledPokemonCard>
      <PokemonImage src={image} alt={name} />
      <PokemonName>{name}</PokemonName>
      <PokemonId>No.{id}</PokemonId>
      <AddButton>추가</AddButton>
    </StyledPokemonCard>
  );
}

function Dex() {
  const [pokemonList, setPokemonList] = useState([]);

  console.log(pokemonList);

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
      {/* <Dashboard></Dashboard> */}
      <PokemonList>
        {pokemonList.map((pokemon) => {
          return <PokemonCardComponent key={pokemon.id} pokemon={pokemon} />;
        })}
      </PokemonList>
    </Container>
  );
}

export default Dex;
