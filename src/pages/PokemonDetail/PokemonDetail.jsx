import { useNavigate, useParams } from "react-router-dom";
import { AddButton, DeleteButton, Button } from "../../components/Button";
import styled from "styled-components";
import { usePokemon } from "../../contexts/PokemonContext";
// import { useDashboard } from "../../contexts/DashboardContext";
import { exceedsPokemonSelectionAlert } from "../../alerts/alerts";
import { exceedsPokemonSelectionValidator } from "../../validation/addPokemonValidator";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, deletePokemon } from "../../redux/selectedPokemon";

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

function PokemonDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pokemonList } = usePokemon();
  const pokemon = pokemonList.find((pokemon) => pokemon.id === id);
  const { name, image, types, description } = pokemon;

  // const { selectedPokemon, setSelectedPokemon } = useDashboard();
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(
    (state) => state.selectedPokemon.selectedPokemon
  );

  const handleDeletePokemon = (id) => {
    dispatch(deletePokemon(id));
  };

  const handleAddPokemon = () => {
    if (exceedsPokemonSelectionValidator(selectedPokemon)) {
      exceedsPokemonSelectionAlert();
      return;
    }

    dispatch(addPokemon(pokemon));
  };

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
      {selectedPokemon.find((el) => el.id === id) ? (
        <DeleteButton onClick={() => handleDeletePokemon(id)}>
          나만의 포켓몬 삭제
        </DeleteButton>
      ) : (
        <AddButton onClick={handleAddPokemon}>나만의 포켓몬 추가</AddButton>
      )}
    </Container>
  );
}

export default PokemonDetail;
