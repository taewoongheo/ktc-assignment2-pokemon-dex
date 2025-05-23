import { configureStore } from "@reduxjs/toolkit";
import selectedPokemonReducer from "./selectedPokemon";

const store = configureStore({
  reducer: {
    selectedPokemon: selectedPokemonReducer,
  },
});

export default store;
