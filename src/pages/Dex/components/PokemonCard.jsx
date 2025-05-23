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
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../../../redux/selectedPokemon";

function PokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(
    (state) => state.selectedPokemon.selectedPokemon
  );

  const handleAddPokemon = (id) => {
    if (exceedsPokemonSelectionValidator(selectedPokemon)) {
      exceedsPokemonSelectionAlert();
      return;
    }

    if (alreadySelectedPokemonValidator(selectedPokemon, id)) {
      alreadySelectedPokemonAlert();
      return;
    }

    dispatch(addPokemon(pokemon));
  };

  return (
    <PokemonCardBase
      pokemon={pokemon}
      onButtonClick={handleAddPokemon}
      buttonLabel={"추가"}
    />
  );
}

export default PokemonCard;
