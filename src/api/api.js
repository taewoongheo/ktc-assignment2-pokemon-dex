function getPokemonUrl() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then((res) =>
    res.json()
  );
}

export async function getPokemonList() {
  const response = await getPokemonUrl();
  const pokemonListId = response.results.map(
    (pokemon) => pokemon.url.split("/").slice(-2, -1)[0]
  );

  try {
    const responses = await Promise.all(
      pokemonListId.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      )
    );

    const jsonList = await Promise.all(responses.map((res) => res.json()));
    return jsonList;
  } catch (error) {
    console.error(error);
    return [];
  }
}
