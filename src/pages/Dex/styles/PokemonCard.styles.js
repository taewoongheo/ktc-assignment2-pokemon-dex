import styled from "styled-components";

export const StyledPokemonCard = styled.div`
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

export const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const PokemonName = styled.h1`
  font-size: 16px;
  font-weight: 600;
  padding-top: 20px;
  padding-bottom: 18px;
`;

export const PokemonId = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 18px;
`;

export const AddButton = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid rgb(213, 213, 213);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
`;
