import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPokemon: [],
};

const selectedPokemonSlice = createSlice({
  name: "selectedPokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.selectedPokemon = [...state.selectedPokemon, action.payload];
    },
    deletePokemon: (state, action) => {
      state.selectedPokemon = state.selectedPokemon.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

export const { addPokemon, deletePokemon } = selectedPokemonSlice.actions;
export default selectedPokemonSlice.reducer;
