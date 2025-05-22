import React from "react";
import PokemonCardBase from "./PokemonCardBase";
import Swal from "sweetalert2";
import {
  exceedsPokemonSelectionValidator,
  alreadySelectedPokemonValidator,
} from "../../../validation/addPokemonValidator";
import {
  exceedsPokemonSelectionAlert,
  alreadySelectedPokemonAlert,
} from "../../../alerts/alerts";

function PokemonCard({ pokemon, setSelectedPokemon }) {
  const addPokemon = (id) => {
    setSelectedPokemon((prev) => {
      if (exceedsPokemonSelectionValidator(prev)) {
        exceedsPokemonSelectionAlert();
        return prev;
      }

      if (alreadySelectedPokemonValidator(prev, id)) {
        alreadySelectedPokemonAlert();
        return prev;
      }

      return [...prev, pokemon];
    });
  };

  return (
    <PokemonCardBase
      pokemon={pokemon}
      onButtonClick={addPokemon}
      buttonLabel={"추가"}
    />
  );
}

export default PokemonCard;
