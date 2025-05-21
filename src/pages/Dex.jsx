import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPokemonInfoList } from "../api/api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0.3,
  background-color: red;
  width: 100%;
`;

const PokemonList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  background-color: yellow;
`;

const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

function PokemonCardComponent({ pokemon }) {
  const { id, name, description, image, types } = pokemon;

  return (
    <div style={{ backgroundColor: "blue" }}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{id}</p>
      <p>{description}</p>
      <div>
        {types === undefined ? (
          <p>undefined</p>
        ) : (
          types.map((type) => {
            return <div>{type.name}</div>;
          })
        )}
      </div>
    </div>
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
      <Dashboard></Dashboard>
      <PokemonList>
        {pokemonList.map((pokemon) => {
          return <PokemonCardComponent key={pokemon.id} pokemon={pokemon} />;
        })}
      </PokemonList>
    </Container>
  );
}

export default Dex;
