export const exceedsPokemonSelectionValidator = (selectedPokemon) => {
  if (selectedPokemon.length >= 6) {
    return true;
  }
  return false;
};

export const alreadySelectedPokemonValidator = (selectedPokemon, id) => {
  if (selectedPokemon.find((pokemon) => pokemon.id === id)) {
    return true;
  }
  return false;
};
