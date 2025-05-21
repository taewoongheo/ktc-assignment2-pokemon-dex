import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1rem;
`;

const PokemonImage = styled.img`
  width: 350px;
  height: 350px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

const PokemonName = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

const PokemonType = styled.span`
  background-color: rgb(243, 243, 243);
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
`;

const PokemonDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

function PokemonDetail({ pokemonList }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const pokemon = pokemonList.find((pokemon) => pokemon.id === id);
  const { name, image, types, description } = pokemon;

  return (
    <Container>
      <PokemonImage src={image} alt={name} />
      <PokemonName>{name}</PokemonName>
      <div>
        <span>타입: </span>
        {types.map((el) => (
          <PokemonType key={el}>{el}</PokemonType>
        ))}
      </div>
      <PokemonDescription>{description}</PokemonDescription>
      <Button onClick={() => navigate(-1)}>뒤로가기</Button>
    </Container>
  );
}

export default PokemonDetail;
