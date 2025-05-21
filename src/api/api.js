function getPokemonUrl() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=30").then((res) =>
    res.json()
  );
}

export async function getPokemonInfoList() {
  const response = await getPokemonUrl();
  const pokemonListId = response.results.map(
    (pokemon) => pokemon.url.split("/").slice(-2, -1)[0]
  );

  try {
    const results = await Promise.all(
      pokemonListId.map(async (id) => {
        const [detail, typesAndImage] = await Promise.all([
          getPokemonDetail(id),
          getPokemonTypesAndImage(id),
        ]);

        return {
          id,
          name: detail.names.find((el) => el.language.name === "ko").name,
          description: detail.flavor_text_entries.find(
            (el) => el.language.name === "ko"
          ).flavor_text,
          ...typesAndImage,
        };
      })
    );

    return Object.fromEntries(results.map((r) => [r.id, r]));
  } catch (error) {
    console.error(error);
    return {};
  }
}

// type, image 정보는 제외
async function getPokemonDetail(id) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );

  const json = await response.json();
  return json;
}

async function getPokemonTypesAndImage(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = await response.json();

  const image = json.sprites.other["official-artwork"].front_default;

  const types = await Promise.all(
    json.types.map((type) => fetch(type.type.url))
  );

  const englishTypeNames = await Promise.all(types.map((res) => res.json()));

  const koreanTypeNames = englishTypeNames.map((type) =>
    type.names.find((el) => el.language.name === "ko")
  );

  return {
    image,
    types: koreanTypeNames,
  };
}
