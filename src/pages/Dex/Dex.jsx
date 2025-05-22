import styled from "styled-components";
import PokemonCard from "./components/PokemonCard";
import Dashboard from "./components/Dashboard";
import { usePokemon } from "../../contexts/PokemonContext";
import { useDashboard } from "../../contexts/DashboardContext";
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
  const { pokemonList } = usePokemon();
  const { selectedPokemon, setSelectedPokemon } = useDashboard();

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
