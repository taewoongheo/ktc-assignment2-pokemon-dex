import { createContext, useContext, useEffect, useState } from "react";
import { getPokemonInfoList } from "../api/api";

const PokemonContext = createContext({
  pokemonList: [],
  setPokemonList: () => {},
});

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);

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
    <PokemonContext.Provider value={{ pokemonList }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context)
    throw new Error("usePokemon must be used within a PokemonProvider");
  return context;
};
